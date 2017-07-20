"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.title = 'user Component';
        this.name = 'Anguler';
        this.email = 'Angular@email.com';
        this.address = {
            line1: 'line1 address',
            line2: 'line2 address',
            line3: 'line3 address'
        };
    }
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<h1> {{title}}</h1>\n  <p>Hello {{name}}<{{email}}></p>\n  <p><strong>Address:</strong>\n    {{address.line1}}<br>\n    {{address.line2}}<br>\n    {{address.line3}}\n  </p>"
    })
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map