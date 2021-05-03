import { Node, mergeAttributes, isNodeEmpty } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import Component from "./custom";

export const TalkingPoint = Node.create({
    name: "talking",
    group: "block",
    content: "paragraph",
    parseHTML() {
        return [
          {
            tag: 'div.tp',
          },
        ]
    },
    
    renderHTML({ HTMLAttributes }) {
        return ['div', mergeAttributes(HTMLAttributes), 0]
    },

    addNodeView() {
        return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
            const dom = document.createElement('div');
            const content = document.createElement("div");
            content.classList.add("tp");
            dom.append(content);
            if (!isNodeEmpty(node)) {
                content.classList.add("no-placeholder");
            }
      
            return {
              dom,
              contentDOM: content,
              update(node) {
                  if (!isNodeEmpty(node.firstChild)) {
                    content.classList.add("no-placeholder")
                  } else {
                    content.classList.remove("no-placeholder")
                  }
                  return true;
              }
            }
        }
    }
});

export const CustomNode = Node.create({
    name: "custom",

    group: "block",

    content: "(talking | bulletList)*",
    
    allowGapCursor: true,

    defining: true,

    addNodeView() {
        return ReactNodeViewRenderer(Component)
    },

    parseHTML() {
        return [
          {
            tag: 'custom-component',
          },
        ]
    },
    
    renderHTML({ HTMLAttributes }) {
        return ['custom-component', mergeAttributes(HTMLAttributes), 0]
    },

    addCommands() {
        return {
          addCustom: () => ({ commands }) => {
            return commands.insertContent({
                type: "custom",
                content: [
                    { 
                        type: "talking",
                        content: [{
                            type: "paragraph",
                            content: []
                        }]
                    },
                    {
                        type: "bulletList",
                        content: [
                            {
                                type: "listItem",
                                content: [{
                                    type: "paragraph",
                                    content: [{
                                        type: "text",
                                        text: "item 1"
                                    }]
                                }]
                            }
                        ]
                    }
                ]
            })
          },
        }
    },
});