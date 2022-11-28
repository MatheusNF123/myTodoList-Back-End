import {Model, DataTypes} from 'sequelize'

import db from '.'
import Users from './Users';

class Folders extends Model {
  declare id: number;
  declare name: string;
  declare userId: number
}

Folders.init(
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
    userId: {
      allowNull: false,
    type: DataTypes.INTEGER,
    }
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'folder',
    timestamps: false
  }
)

Folders.belongsTo(Users, {foreignKey: 'user_id', as: 'folders'})
Users.hasMany(Folders, {foreignKey: 'user_id', as: 'folders'})

export default Folders;