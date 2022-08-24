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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceSchema = exports.Presence = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Presence = class Presence {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now() }),
    __metadata("design:type", Date)
], Presence.prototype, "Date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Presence.prototype, "classId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }],
    }),
    __metadata("design:type", Array)
], Presence.prototype, "absentStudents", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }],
    }),
    __metadata("design:type", Array)
], Presence.prototype, "presentStudents", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Presence.prototype, "open", void 0);
Presence = __decorate([
    (0, mongoose_1.Schema)()
], Presence);
exports.Presence = Presence;
exports.PresenceSchema = mongoose_1.SchemaFactory.createForClass(Presence);
//# sourceMappingURL=presence.schema.js.map