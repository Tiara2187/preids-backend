"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongoDB = /** @class */ (function () {
    function mongoDB() {
        this.connect();
    }
    mongoDB.prototype.connect = function () {
        var finalserver = 'mongodb+srv://Tiaramuttianingtyas23:tiara2398@cluster0.yhwyg.mongodb.net/preids?authSource=admin&replicaSet=atlas-3np62b-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
        mongoose_1.default.connect(process.env.MONGODB_URI || finalserver, {
            useUnifiedTopology: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useCreateIndex: true,
        }, function () {
            console.log("connected to database");
        });
    };
    return mongoDB;
}());
exports.default = new mongoDB().connect;
