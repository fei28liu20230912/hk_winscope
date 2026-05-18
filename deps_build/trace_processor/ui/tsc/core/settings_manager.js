"use strict";
// Copyright (C) 2025 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsManagerImpl = exports.PERFETTO_SETTINGS_STORAGE_KEY = void 0;
exports.PERFETTO_SETTINGS_STORAGE_KEY = 'perfettoSettings';
// Implement the Setting interface for registered settings
class SettingImpl {
    manager;
    id;
    name;
    description;
    defaultValue;
    schema;
    requiresReload;
    render;
    bootValue;
    constructor(manager, id, name, description, defaultValue, schema, requiresReload = false, render) {
        this.manager = manager;
        this.id = id;
        this.name = name;
        this.description = description;
        this.defaultValue = defaultValue;
        this.schema = schema;
        this.requiresReload = requiresReload;
        this.render = render;
        // Record what the value was at startup. This is used to determine if a
        // reload is required.
        this.bootValue = this.get();
    }
    get isDefault() {
        const currentValue = this.get();
        return JSON.stringify(currentValue) === JSON.stringify(this.defaultValue);
    }
    get() {
        const storedValue = this.manager.getStoredValue(this.id);
        const parseResult = this.schema.safeParse(storedValue);
        return parseResult.success ? parseResult.data : this.defaultValue;
    }
    set(newValue) {
        const parseResult = this.schema.safeParse(newValue);
        if (!parseResult.success) {
            console.error(`Invalid value for setting "${this.id}":`, newValue, 'Error:', parseResult.error);
            return;
        }
        const validatedValue = parseResult.data;
        if (this.get() !== validatedValue) {
            this.manager.updateStoredValue(this.id, validatedValue);
        }
    }
    reset() {
        this.manager.clearStoredValue(this.id);
    }
    [Symbol.dispose]() {
        // Use the stored disposable if available
        this.manager.unregister(this.id);
    }
}
class SettingsManagerImpl {
    registry = new Map();
    currentStoredValues = {};
    store;
    constructor(store) {
        this.store = store;
        this.load();
    }
    register(setting) {
        // Determine the initial value: stored value if valid, otherwise default.
        const storedValue = this.currentStoredValues[setting.id];
        const parseResult = setting.schema.safeParse(storedValue);
        // If the stored value was invalid, update storage with the default.
        if (!parseResult.success && storedValue !== undefined) {
            this.currentStoredValues[setting.id] = setting.defaultValue;
            this.save();
        }
        if (this.registry.has(setting.id)) {
            throw new Error(`Setting with id "${setting.id}" already registered.`);
        }
        const settingImpl = new SettingImpl(this, setting.id, setting.name, setting.description, setting.defaultValue, setting.schema, setting.requiresReload, setting.render);
        this.registry.set(setting.id, settingImpl);
        return settingImpl;
    }
    unregister(id) {
        this.registry.delete(id);
    }
    resetAll() {
        this.currentStoredValues = {};
        this.save();
    }
    getAllSettings() {
        const settings = Array.from(this.registry.values());
        settings.sort((a, b) => a.id.localeCompare(b.id));
        return settings;
    }
    isReloadRequired() {
        // Check if any setting that requires reload has changed from its original value
        for (const setting of this.registry.values()) {
            if (setting.requiresReload) {
                const bootValue = setting.bootValue;
                const currentValue = setting.get();
                // Different serialization might cause false differences, so use JSON comparison
                if (JSON.stringify(currentValue) !== JSON.stringify(bootValue)) {
                    return true;
                }
            }
        }
        return false;
    }
    // Internal method to get stored values
    getStoredValue(id) {
        return this.currentStoredValues[id];
    }
    // Internal method to update stored values
    updateStoredValue(id, value) {
        this.currentStoredValues[id] = value;
        this.save();
    }
    clearStoredValue(id) {
        delete this.currentStoredValues[id];
        this.save();
    }
    load() {
        try {
            this.currentStoredValues = this.store.load();
        }
        catch (e) {
            console.error('Failed to load settings from store:', e);
            this.currentStoredValues = {};
        }
        // Re-validate existing registered settings after load
        for (const runtime of this.registry.values()) {
            const setting = runtime;
            const storedValue = this.currentStoredValues[setting.id];
            const parseResult = setting.schema.safeParse(storedValue);
            // Ensure storage reflects the potentially corrected value
            if (!parseResult.success && storedValue !== undefined) {
                this.currentStoredValues[setting.id] = setting.defaultValue;
            }
            // Don't overwrite originalValues here since they'll be set during registration
        }
        // Save potentially corrected values back to storage
        this.save();
    }
    save() {
        try {
            this.store.save(this.currentStoredValues);
        }
        catch (e) {
            console.error('Failed to save settings to store:', e);
        }
    }
}
exports.SettingsManagerImpl = SettingsManagerImpl;
//# sourceMappingURL=settings_manager.js.map