"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementPositionTopDom(element) {
    return {
        height: element.offsetHeight,
        width: element.offsetWidth,
        x: element.offsetLeft,
        y: element.offsetTop,
    };
}
exports.default = getElementPositionTopDom;
//# sourceMappingURL=getElementPositionTopDom.js.map