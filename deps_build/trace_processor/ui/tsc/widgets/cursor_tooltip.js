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
exports.CursorTooltip = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const portal_1 = require("./portal");
const dom_utils_1 = require("../base/dom_utils");
const disposable_stack_1 = require("../base/disposable_stack");
const core_1 = require("@popperjs/core");
const classnames_1 = require("../base/classnames");
const geom_1 = require("../base/geom");
class VElement {
    pos = new geom_1.Vector2D({ x: 0, y: 0 });
    getBoundingClientRect() {
        return new DOMRect(this.pos.x, this.pos.y, 0, 0);
    }
    setPosition(pos) {
        this.pos = new geom_1.Vector2D(pos);
    }
}
// Keep track of the mouse position in the document so that the cursor can be
// initially drawn in the correct place, before it's received any mouse events.
let globalMousePos;
document.addEventListener('mousemove', (e) => {
    globalMousePos = new geom_1.Vector2D({ x: e.clientX, y: e.clientY });
});
/**
 * Provides a little tooltip that's permanently attached to the mouse.
 *
 * Any children are rendered inside - the tooltip is displayed to the bottom
 * right if there is room.
 */
class CursorTooltip {
    trash = new disposable_stack_1.DisposableStack();
    virtualElement = new VElement();
    popper;
    view({ children, attrs }) {
        const { className, ...rest } = attrs;
        return (0, mithril_1.default)(portal_1.Portal, {
            ...rest,
            className: (0, classnames_1.classNames)('pf-cursor-tooltip', className),
            onContentMount: (portal) => {
                this.virtualElement.setPosition(globalMousePos);
                this.popper = (0, core_1.createPopper)(this.virtualElement, portal, {
                    placement: 'right',
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 8], // Shift away from cursor
                            },
                        },
                    ],
                });
            },
            onContentUnmount: () => {
                this.popper?.destroy();
            },
        }, children);
    }
    oncreate(_) {
        this.trash.use((0, dom_utils_1.bindEventListener)(document, 'mousemove', (e) => {
            this.virtualElement.setPosition({ x: e.clientX, y: e.clientY });
            this.popper?.update();
        }));
    }
    onremove(_) {
        this.trash.dispose();
    }
}
exports.CursorTooltip = CursorTooltip;
//# sourceMappingURL=cursor_tooltip.js.map