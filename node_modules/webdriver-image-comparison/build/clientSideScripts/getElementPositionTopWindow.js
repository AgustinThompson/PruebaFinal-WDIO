"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementPositionTopWindow(element) {
    var rectangles = element.getBoundingClientRect();
    return {
        height: Math.round(rectangles.height),
        width: Math.round(rectangles.width),
        x: Math.round(rectangles.left),
        y: Math.round(rectangles.top),
    };
}
exports.default = getElementPositionTopWindow;
//# sourceMappingURL=getElementPositionTopWindow.js.map