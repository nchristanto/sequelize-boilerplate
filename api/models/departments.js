const departments = (sequelize, DataTypes) => {
  let departments = sequelize.define('departments', {
    id_account: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dept_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    }
  })

  departments.associate = (models) => {
    models.departments.belongsTo(models.accounts,{
      foreignKey: "id_account",
      targetKey: "id"
    });
  };

  return departments
}

module.exports = departments;