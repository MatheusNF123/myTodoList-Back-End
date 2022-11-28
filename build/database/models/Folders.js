"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Users_1 = __importDefault(require("./Users"));
class Folders extends sequelize_1.Model {
}
Folders.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'folder',
    timestamps: false
});
Folders.belongsTo(Users_1.default, { foreignKey: 'user_id', as: 'folders' });
Users_1.default.hasMany(Folders, { foreignKey: 'user_id', as: 'folders' });
exports.default = Folders;
