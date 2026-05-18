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
exports.QueryCanvas = void 0;
const tslib_1 = require("tslib");
const mithril_1 = tslib_1.__importDefault(require("mithril"));
const button_1 = require("../../../widgets/button");
const menu_1 = require("../../../widgets/menu");
const semantic_icons_1 = require("../../../base/semantic_icons");
const common_1 = require("../../../widgets/common");
const classnames_1 = require("../../../base/classnames");
class NodeBox {
    view({ attrs }) {
        const { node, isSelected, layout, onNodeSelected, onNodeDragStart } = attrs;
        const conditionalClasses = (0, classnames_1.classNames)(isSelected && 'pf-node-box__selected', !node.validate() && 'pf-node-box__invalid');
        return (0, mithril_1.default)('.pf-node-box', {
            class: conditionalClasses,
            style: {
                position: 'absolute',
                left: `${layout.x || 10}px`,
                top: `${layout.y || 10}px`,
            },
            onclick: () => onNodeSelected(node),
            draggable: true,
            ondragstart: (event) => onNodeDragStart(node, event),
        }, node.getTitle(), (0, mithril_1.default)(menu_1.PopupMenu, {
            trigger: (0, mithril_1.default)(button_1.Button, {
                iconFilled: true,
                icon: semantic_icons_1.Icons.ContextMenuAlt,
            }),
        }, attrs.renderNodeActionsMenuItems(node)));
    }
}
class QueryCanvas {
    dragNode;
    nodeLayouts = new Map();
    oncreate(vnode) {
        const box = vnode.dom;
        box.ondragover = (event) => {
            event.preventDefault(); // Allow dropping
        };
        box.ondrop = (event) => {
            event.preventDefault();
            if (!this.dragNode)
                return;
            const dragNodeLayout = this.nodeLayouts.get(this.dragNode);
            if (!dragNodeLayout)
                return;
            // Adjust position based on where the mouse dropped relative to the box origin
            // and center the node based on its stored dimensions.
            const rect = box.getBoundingClientRect();
            const x = event.clientX - rect.left - (dragNodeLayout.width ?? 50) / 2;
            const y = event.clientY - rect.top - (dragNodeLayout.height ?? 50) / 2;
            this.nodeLayouts.set(this.dragNode, {
                ...dragNodeLayout,
                x: Math.max(0, Math.min(x, rect.width - (dragNodeLayout.width ?? 100))),
                y: Math.max(0, Math.min(y, rect.height - (dragNodeLayout.height ?? 100))),
            });
            this.dragNode = undefined;
            mithril_1.default.redraw();
        };
    }
    onNodeDragStart = (node, event) => {
        this.dragNode = node;
        const nodeElem = event.target.closest('.pf-node-box');
        const layout = this.nodeLayouts.get(node) || { x: 10, y: 10 };
        this.nodeLayouts.set(node, {
            ...layout,
            width: nodeElem.offsetWidth,
            height: nodeElem.offsetHeight,
        });
        if (event.dataTransfer) {
            event.dataTransfer.setData('text/plain', node.getTitle());
            event.dataTransfer.effectAllowed = 'move';
        }
    };
    view({ attrs }) {
        const { rootNodes, onNodeSelected, selectedNode, renderNodeActionsMenuItems, addSourcePopupMenu, } = attrs;
        const nodes = [];
        const numRoots = rootNodes.length;
        if (numRoots === 0) {
            // Render the centered "Add" button if no nodes exist
            nodes.push((0, mithril_1.default)('.query-canvas-add-button-container', (0, mithril_1.default)(menu_1.PopupMenu, {
                trigger: (0, mithril_1.default)(button_1.Button, {
                    icon: semantic_icons_1.Icons.Add,
                    intent: common_1.Intent.Primary,
                }),
            }, addSourcePopupMenu())));
        }
        else {
            rootNodes.forEach((rootNode) => {
                let curNode = rootNode;
                while (curNode) {
                    const localCurNode = curNode;
                    const layout = this.nodeLayouts.get(localCurNode) || { x: 10, y: 10 };
                    if (!this.nodeLayouts.has(localCurNode)) {
                        this.nodeLayouts.set(localCurNode, layout);
                    }
                    nodes.push((0, mithril_1.default)(NodeBox, {
                        node: localCurNode,
                        isSelected: selectedNode === localCurNode,
                        layout,
                        onNodeSelected,
                        renderNodeActionsMenuItems,
                        onNodeDragStart: this.onNodeDragStart,
                    }));
                    curNode = curNode.nextNode;
                }
            });
        }
        return (0, mithril_1.default)('.pf-query-canvas', nodes);
    }
}
exports.QueryCanvas = QueryCanvas;
//# sourceMappingURL=query_canvas.js.map