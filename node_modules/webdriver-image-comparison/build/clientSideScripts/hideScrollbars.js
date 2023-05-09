"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hideScrollBars(hide) {
    try {
        if (hide) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }
    }
    catch (e) {
    }
}
exports.default = hideScrollBars;
//# sourceMappingURL=hideScrollbars.js.map