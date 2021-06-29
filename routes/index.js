"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var errorHandlers_1 = __importDefault(require("../helpers/errorHandlers"));
var visitors_1 = __importDefault(require("./visitors"));
var Index = /** @class */ (function () {
    function Index() {
        this.router = express_1.Router();
        this.index();
    }
    Index.prototype.index = function () {
        this.router.use('/visitors', visitors_1.default);
        this.router.use(errorHandlers_1.default.errorhandler);
    };
    return Index;
}());
exports.default = new Index().router;
