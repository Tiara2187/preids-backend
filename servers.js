"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connect_1 = __importDefault(require("./config/connect"));
var index_1 = __importDefault(require("./routes/index"));
var cors_1 = __importDefault(require("cors"));
var Servers = /** @class */ (function () {
    function Servers() {
        this.app = express_1.default();
        this.plugin();
        this.route();
    }
    Servers.prototype.plugin = function () {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(function (req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
            next();
        });
        this.app.use(cors_1.default());
        connect_1.default();
    };
    Servers.prototype.route = function () {
        this.app.use(index_1.default);
    };
    return Servers;
}());
var port = 3000;
var app = new Servers().app;
app.listen(port, function () {
    console.log("App runs on http://localhost:" + port);
});
exports.default = app;
