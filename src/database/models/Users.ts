import {Model, DataTypes} from 'sequelize'

import db from '.'

class Users extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
}

Users.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'user',
    timestamps: false
  }
)

export default Users;