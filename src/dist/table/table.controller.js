"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let TableController = class TableController {
    constructor(tableService) {
        this.tableService = tableService;
    }
    findAll() {
        return this.tableService.findAll();
    }
    findById(id) {
        return this.tableService.findById(id);
    }
    create(createTableDto) {
        return this.tableService.create(createTableDto);
    }
    delete(id) {
        return this.tableService.delete(id);
    }
    update(id, dto) {
        return this.tableService.update(id, dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Lista todos os itens'
    })
], TableController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Item por ID'
    }),
    __param(0, (0, common_1.Param)('id'))
], TableController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Cria um novo item'
    }),
    __param(0, (0, common_1.Body)())
], TableController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Deletar item'
    }),
    __param(0, (0, common_1.Param)(':id'))
], TableController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Atualizar Item'
    }),
    __param(0, (0, common_1.Param)(':id')),
    __param(1, (0, common_1.Body)())
], TableController.prototype, "update", null);
TableController = __decorate([
    (0, swagger_1.ApiTags)('table'),
    (0, common_1.Controller)('table')
], TableController);
exports.TableController = TableController;
