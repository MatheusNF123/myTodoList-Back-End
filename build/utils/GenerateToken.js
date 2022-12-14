"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const jwt = __importStar(require("jsonwebtoken"));
const customError_1 = __importDefault(require("../Error/customError"));
const secretKey = process.env.JWT_SECRET || 'jwt_secret';
class Token {
}
exports.default = Token;
Token.generateToken = (payload) => {
    const token = jwt.sign(payload, secretKey, { expiresIn: '20h' });
    return token;
};
Token.authToken = (req, _res, next) => {
    const { authorization } = req.headers;
    console.log('-----------', authorization);
    if (!authorization) {
        throw new customError_1.default('Token must be a valid token', 401);
    }
    try {
        const verificaToken = jwt.verify(authorization, secretKey);
        req.user = verificaToken;
        next();
    }
    catch (error) {
        throw new customError_1.default('Token must be a valid token', 401);
    }
};
