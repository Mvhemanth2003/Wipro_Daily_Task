var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Animal.prototype.greet = function () {
        console.log("hi my name is ".concat(this.name, " welcome"));
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getId = function () {
        return this.id;
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(id, name, age, skills) {
        var _this = _super.call(this, id, name, age) || this;
        _this.skills = skills;
        return _this;
    }
    return dog;
}(Animal));
var p1 = new dog(1, "Dog", 22, ["bark", "snore", "eat"]);
console.log(p1.getId());
