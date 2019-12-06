"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(height, width) {
        this.h = height;
        this.w = width || 0;
    }
    return Shape;
}());
var Reactangle = /** @class */ (function (_super) {
    __extends(Reactangle, _super);
    function Reactangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reactangle.prototype.area = function () {
        return this.h * this.w;
    };
    return Reactangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.area = function () {
        return this.h * this.h;
    };
    return Square;
}(Shape));
var rectObj = new Reactangle(10, 20);
console.log(rectObj.area());
var srq = new Square(10);
console.log(srq.area());
