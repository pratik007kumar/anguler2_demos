"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        this.hobbies = ['hooby1', 'hooby2', 'hooby3'];
        this.showhobby = false;
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showhobby == true) {
            this.showhobby = false;
        }
        else {
            this.showhobby = true;
        }
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        // console.log(i);
        this.hobbies.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<h1> {{title}}</h1>\n  <p>Hello {{name}}<{{email}}></p>\n  <p><strong>Address:</strong>\n    {{address.line1}}<br>\n    {{address.line2}}<br>\n    {{address.line3}}\n  </p>\n  <button (click)=\"toggleHobbies()\"> {{showhobby ? \"Hide\":\"Show\" }} Hobbies</button>\n  <div *ngIf=\"showhobby\">\n  <p><strong>Hobbies:</strong></p>\n  <ul>\n    <li *ngFor=\"let hobby of hobbies; let i=index\">\n    {{hobby}} <button type=\"button\" (click)=\"deleteHobby(i)\">X</button>\n    </li>\n  </ul>\n  <p><strong>Hobbies:</strong>\n   {{hobbies}}\n   </p>\n   <form (submit)=\"addHobby(hobby.value)\">\n  <label> Add Hobbies </label> <br />  \n  <input type=\"text\" name=\"hobby\" #hobby  /><br> \n  </form>\n  <br>\n  <br>\n  <hr>\n  </div>\n  <form>\n  <label> Name </label> <br />  \n  <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" /><br>\n  <label> Email </label> <br />  \n  <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" /><br>\n  <label> Address </label> <br />  \n  <input type=\"text\" name=\"address[]\" [(ngModel)]=\"address.line1\" /><br>\n  <input type=\"text\" name=\"address[]\" [(ngModel)]=\"address.line2\" /><br>\n  <input type=\"text\" name=\"address[]\" [(ngModel)]=\"address.line3\" /><br>\n  </form>\n  "
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map