"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var VisitorsController_1 = __importDefault(require("../controllers/VisitorsController"));
var Visitors = /** @class */ (function () {
    function Visitors() {
        this.router = express_1.Router();
        this.visitors();
    }
    Visitors.prototype.visitors = function () {
        this.router.post('/createvisitors', VisitorsController_1.default.createVisitors);
        this.router.get('/getvisitors/:id', VisitorsController_1.default.getVisitors);
        this.router.get('/listvistors', VisitorsController_1.default.listVisitors);
        this.router.delete('/deletevisitors/:id', VisitorsController_1.default.deleteCategory);
        this.router.put('/updatevisitors/:id', VisitorsController_1.default.updateVisitors);
    };
    return Visitors;
}());
exports.default = new Visitors().router;
