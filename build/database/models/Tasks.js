"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Folders_1 = __importDefault(require("./Folders"));
class Tasks extends sequelize_1.Model {
}
Tasks.init({
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
    date: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    inProgress: {
        allowNull: false,
        type: sequelize_1.DataTypes.BOOLEAN
    },
    descricao: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    folderId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'task',
    timestamps: false
});
Tasks.belongsTo(Folders_1.default, { foreignKey: 'folderId', as: 'tasks' });
Folders_1.default.hasMany(Tasks, { foreignKey: 'folderId', as: 'tasks' });
exports.default = Tasks;
