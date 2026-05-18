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
exports.renderStatusBar = renderStatusBar;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const button_1 = require("../widgets/button");
const popup_1 = require("../widgets/popup");
/**
 * A persistent status bar component typically rendered at the bottom of the UI.
 */
function renderStatusBar(trace) {
    return (0, mithril_1.default)('.pf-statusbar', trace?.statusbar.statusBarItems.map((item) => {
        const { icon, label, intent, onclick } = item.renderItem();
        const popupContent = item.popupContent?.();
        const itemContent = (0, mithril_1.default)(button_1.Button, {
            label,
            icon,
            intent,
            onclick,
            variant: button_1.ButtonVariant.Filled,
        });
        if (Boolean(popupContent)) {
            return (0, mithril_1.default)(popup_1.Popup, {
                position: popup_1.PopupPosition.Top,
                trigger: itemContent,
            }, popupContent);
        }
        else {
            return itemContent;
        }
    }));
}
//# sourceMappingURL=statusbar.js.map