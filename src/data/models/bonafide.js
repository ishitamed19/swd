/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bonafide', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    reqDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    otherReason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    printed: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'bonafide'
  });
};
