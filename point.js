"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("X co-ord is " + this._x + " and Y co-ord is " + this._y);
    };
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=point.js.map