"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visitors = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var visitorsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    indikator: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        maxlength: 20,
        validate: [/^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/, 'please fill valid phone']
    },
    email: {
        type: String,
        required: true,
        unique: true, partialFilterExpression: { email: { $exists: true } },
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    birthdate: {
        type: Date,
        required: true
    },
    doctors: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
var Visitors = mongoose_1.default.model('Visitors', visitorsSchema);
exports.Visitors = Visitors;
