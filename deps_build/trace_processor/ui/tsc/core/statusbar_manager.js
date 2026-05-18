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
exports.StatusbarManagerImpl = void 0;
/**
 * Manages the state for a simple status bar that can display one piece of
 * content at a time.
 *
 * At least for now, this is not meant to be used by several plugins at the same
 * time.
 */
class StatusbarManagerImpl {
    _statusBarItems = [];
    registerItem(item) {
        this._statusBarItems.push(item);
    }
    get statusBarItems() {
        return this._statusBarItems;
    }
}
exports.StatusbarManagerImpl = StatusbarManagerImpl;
//# sourceMappingURL=statusbar_manager.js.map