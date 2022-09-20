const Class = (sequelize, DataTypes) => {
  const Class = sequelize.define("Class", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    tags: DataTypes.STRING,
    video_id: DataTypes.STRING,
    type: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  Class.associate = (models) => {
    Class.hasMany(models.Rating, {foreignKey: 'classId', as: 'ratings'});
  }
  
  return Class;
};

module.exports = Class;