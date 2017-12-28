"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FbLike = /** @class */ (function () {
    // buttonStatus : boolean = false;
    // numberOfLikes : number;
    function FbLike(_numberOfLikes, _buttonStatus) {
        this._numberOfLikes = _numberOfLikes;
        this._buttonStatus = _buttonStatus;
    }
    FbLike.prototype.onClickLikeBtn = function () {
        this._numberOfLikes += this._buttonStatus ? -1 : 1;
        this._buttonStatus = !this._buttonStatus;
    };
    Object.defineProperty(FbLike.prototype, "numberOfLikes", {
        get: function () {
            return this._numberOfLikes;
        },
        set: function (likeCOunt) {
            this._numberOfLikes = likeCOunt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FbLike.prototype, "buttonStatus", {
        get: function () {
            return this._buttonStatus;
        },
        set: function (isClicked) {
            this._buttonStatus = isClicked;
        },
        enumerable: true,
        configurable: true
    });
    return FbLike;
}());
exports.FbLike = FbLike;
//# sourceMappingURL=fbLike.js.map