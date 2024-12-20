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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoicesController = void 0;
const common_1 = require("@nestjs/common");
const choices_service_1 = require("./choices.service");
let ChoicesController = class ChoicesController {
    constructor(choicesService) {
        this.choicesService = choicesService;
    }
    saveChoice(data) {
        return this.choicesService.saveChoice(data.userId, data.category, data.choice, data.choiceName);
    }
    async getVotesByCategory(category) {
        return this.choicesService.getVotesByCategory(category);
    }
    async getChoice(userId, category) {
        const choice = await this.choicesService.getChoice(userId, category);
        if (!choice) {
            return { hasChosen: false };
        }
        return { hasChosen: true, choiceName: choice.choiceName };
    }
    async getAllVotes() {
        return this.choicesService.getAllVotes();
    }
};
exports.ChoicesController = ChoicesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChoicesController.prototype, "saveChoice", null);
__decorate([
    (0, common_1.Get)('votes/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChoicesController.prototype, "getVotesByCategory", null);
__decorate([
    (0, common_1.Get)(':userId/:category'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChoicesController.prototype, "getChoice", null);
__decorate([
    (0, common_1.Get)('votes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChoicesController.prototype, "getAllVotes", null);
exports.ChoicesController = ChoicesController = __decorate([
    (0, common_1.Controller)('choices'),
    __metadata("design:paramtypes", [choices_service_1.ChoicesService])
], ChoicesController);
//# sourceMappingURL=choices.controller.js.map