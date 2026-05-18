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
exports.MultiselectInput = void 0;
const tslib_1 = require("tslib");
/**
 * This is a multiselect widgets that allows users to select multiple items from
 * a list of options by typing or clicking rather than just clicking I.e. using
 * checkboxes.
 */
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const icon_1 = require("./icon");
const dom_utils_1 = require("../base/dom_utils");
const popup_1 = require("./popup");
const empty_state_1 = require("./empty_state");
const classnames_1 = require("../base/classnames");
const INPUT_REF = 'input';
class MultiselectInput {
    keyEventHandler;
    currentTextValue = '';
    selectedItemIndex = 0;
    popupShouldOpen = false;
    isFocused = false;
    view({ attrs }) {
        const { selectedOptions, placeholder, options, ...htmlAttrs } = attrs;
        return (0, mithril_1.default)(popup_1.Popup, {
            className: 'pf-multiselect-input__popup',
            position: popup_1.PopupPosition.Bottom,
            matchWidth: true,
            onChange: (open) => {
                this.popupShouldOpen = open;
            },
            // Keep the popup open if the input is focused or the the popup has been
            // asked to be opened.
            isOpen: this.popupShouldOpen || this.isFocused,
            trigger: (0, mithril_1.default)('.pf-multiselect-input', {
                onclick: (ev) => {
                    const target = ev.currentTarget;
                    const inputElement = (0, dom_utils_1.findRef)(target, INPUT_REF);
                    if (inputElement) {
                        inputElement.focus();
                    }
                },
                ...htmlAttrs,
            }, 
            // Render the selected options as tags in the text field
            selectedOptions.map((key) => {
                const option = options.find((o) => o.key === key);
                if (option) {
                    return renderTag({
                        label: option.label,
                        onRemove: () => attrs.onOptionRemove(option.key),
                    });
                }
                else {
                    return undefined;
                }
            }), (0, mithril_1.default)('input', {
                ref: INPUT_REF,
                value: this.currentTextValue,
                placeholder,
                onfocus: () => {
                    this.isFocused = true;
                    console.log(this.popupShouldOpen, this.isFocused);
                },
                onblur: () => {
                    this.isFocused = false;
                    console.log(this.popupShouldOpen, this.isFocused);
                },
                oninput: (ev) => {
                    const el = ev.target;
                    this.currentTextValue = el.value;
                    this.selectedItemIndex = 0;
                },
            })),
        }, this.renderOptionsPopup(attrs));
    }
    renderOptionsPopup(attrs) {
        const { onOptionAdd, onOptionRemove, selectedOptions } = attrs;
        const filtered = this.filterOptions(attrs);
        if (filtered.length === 0) {
            return (0, mithril_1.default)(empty_state_1.EmptyState, { title: 'No results found', icon: 'search_off' });
        }
        return (0, mithril_1.default)('.pf-multiselect-input__scroller', {
            oncreate: () => {
                this.keyEventHandler = (0, dom_utils_1.bindEventListener)(document, 'keydown', (ev) => {
                    // We need to trigger a redraw as we're circumventing mithril's
                    // event system here.
                    mithril_1.default.redraw();
                    const filteredOptions = this.filterOptions(attrs);
                    if (ev.key === 'Enter') {
                        if (filteredOptions.length > 0) {
                            const option = filteredOptions[this.selectedItemIndex];
                            const alreadyAdded = selectedOptions.includes(option.key);
                            if (alreadyAdded) {
                                onOptionRemove(option.key);
                            }
                            else {
                                onOptionAdd(option.key);
                            }
                            this.currentTextValue = '';
                        }
                    }
                    else if (ev.key === 'ArrowUp') {
                        if (filteredOptions.length > 0) {
                            this.selectedItemIndex = Math.max(0, this.selectedItemIndex - 1);
                        }
                        ev.preventDefault();
                    }
                    else if (ev.key === 'ArrowDown') {
                        if (filteredOptions.length > 0) {
                            this.selectedItemIndex = Math.min(filteredOptions.length - 1, this.selectedItemIndex + 1);
                        }
                        ev.preventDefault();
                    }
                    else if (ev.key === 'Backspace') {
                        if (this.currentTextValue === '' &&
                            selectedOptions.length > 0) {
                            onOptionRemove(selectedOptions[selectedOptions.length - 1]);
                            ev.preventDefault();
                        }
                    }
                });
            },
            onremove: () => {
                this.keyEventHandler?.[Symbol.dispose]();
            },
        }, filtered.map((o, index) => {
            const alreadyAdded = selectedOptions.includes(o.key);
            return (0, mithril_1.default)('.pf-multiselect-input__option-row', {
                key: o.key,
                className: (0, classnames_1.classNames)(this.selectedItemIndex === index &&
                    'pf-multiselect-input__option-row--selected'),
                onclick: () => {
                    if (alreadyAdded) {
                        onOptionRemove(o.key);
                    }
                    else {
                        onOptionAdd(o.key);
                    }
                },
            }, alreadyAdded && (0, mithril_1.default)(icon_1.Icon, { icon: 'check' }), o.label);
        }));
    }
    filterOptions({ options }) {
        return options.filter((o) => {
            return o.label
                .toLowerCase()
                .includes(this.currentTextValue.toLowerCase());
        });
    }
}
exports.MultiselectInput = MultiselectInput;
function renderTag({ label, onRemove }) {
    return (0, mithril_1.default)('span.pf-multiselect-input__tag', label, (0, mithril_1.default)(icon_1.Icon, {
        icon: 'close',
        onclick: () => onRemove?.(),
    }));
}
//# sourceMappingURL=multiselect_input.js.map