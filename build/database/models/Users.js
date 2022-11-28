"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    username: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'user',
    timestamps: false
});
exports.default = Users;
