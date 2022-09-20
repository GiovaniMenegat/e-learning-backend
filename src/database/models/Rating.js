const Rating = (sequelize, DataTypes) => {
  const Rating = sequelize.define("Rating", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  },
  
  { timestamps: true, tableName: 'Ratings' },
  );

  Rating.associate = (models) => {
    Rating.belongsTo(models.User, {foreignKey: 'userId', as: 'users'});
    Rating.belongsTo(models.Class, {foreignKey: 'classId', as: 'classes'});
  }
  
  return Rating;
};

module.exports = Rating;