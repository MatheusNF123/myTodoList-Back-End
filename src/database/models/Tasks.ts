import {Model, DataTypes} from 'sequelize'

import db from '.'
import Folders from './Folders';

class Tasks extends Model {
  declare id: number;
  declare name: string;
  declare date: string;
  declare inProgress: boolean;
  declare descricao: string;
  declare folderId: number

}

Tasks.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    date: {
      allowNull: false,
      type: DataTypes.STRING
    },
    inProgress: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    descricao: {
      allowNull: false,
      type: DataTypes.STRING
    },
    folderId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'task',
    timestamps: false
  }
)

Tasks.belongsTo(Folders, {foreignKey: 'folderId', as: 'tasks'})
Folders.hasMany(Tasks, {foreignKey: 'folderId', as: 'tasks'})

export default Tasks;