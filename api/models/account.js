const accounts = (sequelize, DataTypes) => {
  return sequelize.define('accounts', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(60), 
      allowNull: false, 
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  })
}

module.exports = accounts