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
exports.SettingsPage = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const app_impl_1 = require("../../core/app_impl");
const zod_1 = require("zod");
const button_1 = require("../../widgets/button");
const card_1 = require("../../widgets/card");
const settings_shell_1 = require("../../widgets/settings_shell");
const switch_1 = require("../../widgets/switch");
const select_1 = require("../../widgets/select");
const text_input_1 = require("../../widgets/text_input");
const icon_1 = require("../../widgets/icon");
const common_1 = require("../../widgets/common");
const empty_state_1 = require("../../widgets/empty_state");
const classnames_1 = require("../../base/classnames");
class SettingsPage {
    filterText = '';
    view() {
        const app = app_impl_1.AppImpl.instance;
        const settingsManager = app.settings;
        const allSettings = settingsManager.getAllSettings();
        const reloadRequired = settingsManager.isReloadRequired();
        // Filter settings based on the search text
        const isFiltering = this.filterText.trim() !== '';
        const filteredSettings = isFiltering
            ? allSettings.filter((setting) => setting.name
                .toLowerCase()
                .includes(this.filterText.toLowerCase()) ||
                (setting.description &&
                    setting.description
                        .toLowerCase()
                        .includes(this.filterText.toLowerCase())))
            : allSettings;
        return (0, mithril_1.default)(settings_shell_1.SettingsShell, {
            title: 'Settings',
            stickyHeaderContent: (0, mithril_1.default)('.pf-settings-page__topbar', (0, mithril_1.default)(button_1.ButtonBar, (0, mithril_1.default)(button_1.Button, {
                icon: 'restore',
                label: 'Restore Defaults',
                onclick: () => settingsManager.resetAll(),
            }), reloadRequired &&
                (0, mithril_1.default)(button_1.Button, {
                    icon: 'refresh',
                    label: 'Reload required',
                    variant: button_1.ButtonVariant.Filled,
                    intent: common_1.Intent.Primary,
                    onclick: () => window.location.reload(),
                })), (0, mithril_1.default)(text_input_1.TextInput, {
                placeholder: 'Filter settings...',
                value: this.filterText,
                leftIcon: 'search',
                oninput: (e) => {
                    const target = e.target;
                    this.filterText = target.value;
                },
            })),
        }, (0, mithril_1.default)('.pf-settings-page', filteredSettings.length === 0
            ? this.renderEmptyState(isFiltering)
            : (0, mithril_1.default)(card_1.CardList, filteredSettings.map((setting) => {
                return this.renderSettingCard(setting);
            }))));
    }
    renderEmptyState(isFiltering) {
        if (isFiltering) {
            return (0, mithril_1.default)(empty_state_1.EmptyState, {
                icon: 'filter_alt_off',
                title: 'No settings match your search criteria',
            }, (0, mithril_1.default)(button_1.Button, {
                label: 'Clear filter',
                icon: 'clear',
                variant: button_1.ButtonVariant.Filled,
                intent: common_1.Intent.Primary,
                onclick: () => {
                    this.filterText = '';
                },
            }));
        }
        else {
            return (0, mithril_1.default)(empty_state_1.EmptyState, {
                icon: 'search_off',
                title: 'No settings found',
            });
        }
    }
    renderSettingCard(setting) {
        return (0, mithril_1.default)(card_1.Card, {
            borderless: true,
            className: (0, classnames_1.classNames)('pf-settings-page__card', !setting.isDefault && 'pf-settings-page__card--changed'),
            key: setting.id,
        }, (0, mithril_1.default)('.pf-settings-page__details', (0, mithril_1.default)('h1', setting.name), setting.description &&
            (0, mithril_1.default)('.pf-settings-page__description', setting.description)), (0, mithril_1.default)('.pf-settings-page__controls', [
            !setting.isDefault &&
                (0, mithril_1.default)(button_1.Button, {
                    icon: 'restore',
                    title: 'Restore default',
                    variant: button_1.ButtonVariant.Minimal,
                    onclick: () => {
                        setting.reset();
                    },
                }),
            this.renderSettingControl(setting),
        ]));
    }
    renderSettingControl(setting) {
        const currentValue = setting.get();
        // If the setting has a custom renderer, use it
        if (setting.render) {
            // Cast to any to handle the type mismatch between unknown and T
            return setting.render(setting);
        }
        // Boolean settings get a switch
        if (setting.schema instanceof zod_1.z.ZodBoolean) {
            return (0, mithril_1.default)(switch_1.Switch, {
                checked: currentValue,
                onchange: () => {
                    setting.set(!currentValue);
                },
            });
        }
        // Enum settings get a select dropdown
        else if (setting.schema instanceof zod_1.z.ZodEnum) {
            const options = setting.schema.options;
            return (0, mithril_1.default)(select_1.Select, {
                value: String(currentValue), // Ensure value is a string
                onchange: (e) => {
                    const target = e.target;
                    setting.set(target.value);
                },
            }, options.map((option) => {
                return (0, mithril_1.default)('option', {
                    value: option,
                    selected: currentValue === option,
                }, option);
            }));
        }
        // Native enum settings also get a select dropdown
        else if (setting.schema instanceof zod_1.z.ZodNativeEnum) {
            // Extract the enum values - for native enums we need to get both keys and values
            const enumValues = Object.entries(setting.schema._def.values);
            return (0, mithril_1.default)(select_1.Select, {
                value: String(currentValue), // Ensure value is a string
                onchange: (e) => {
                    const target = e.target;
                    // Convert to number if the original enum value was numeric
                    const value = isNaN(Number(target.value))
                        ? target.value
                        : Number(target.value);
                    setting.set(value);
                },
            }, enumValues.map(([key, value]) => {
                // Only include the string keys (not the reverse mapping that TypeScript adds)
                if (typeof key === 'string' && isNaN(Number(key))) {
                    return (0, mithril_1.default)('option', {
                        value: value,
                        selected: currentValue === value,
                    }, key);
                }
                return null;
            }));
        }
        // Number settings get a number input
        else if (setting.schema instanceof zod_1.z.ZodNumber) {
            const minCheck = setting.schema._def.checks.find((check) => check.kind === 'min');
            const maxCheck = setting.schema._def.checks.find((check) => check.kind === 'max');
            const min = minCheck ? minCheck.value : undefined;
            const max = maxCheck ? maxCheck.value : undefined;
            return (0, mithril_1.default)(text_input_1.TextInput, {
                type: 'number',
                value: currentValue,
                min: min, // Add min attribute
                max: max, // Add max attribute
                onchange: (e) => {
                    const target = e.target;
                    const value = target.valueAsNumber;
                    setting.set(value);
                },
            });
        }
        // String settings get a text input
        else if (setting.schema instanceof zod_1.z.ZodString) {
            return (0, mithril_1.default)(text_input_1.TextInput, {
                value: currentValue,
                onchange: (e) => {
                    const target = e.target;
                    setting.set(target.value);
                },
            });
        }
        // For complex types or unsupported schemas, just show an error message
        else {
            return (0, mithril_1.default)('.pf-settings-page__complex-error', [
                (0, mithril_1.default)(icon_1.Icon, { icon: 'error_outline' }),
                (0, mithril_1.default)('span', 'Cannot edit this setting directly'),
            ]);
        }
    }
}
exports.SettingsPage = SettingsPage;
//# sourceMappingURL=settings_page.js.map