module.exports = (sequelize, DataTypes) => {
    const favorite = sequelize.define('Favorite', {
        title: DataTypes.STRING
    })

    return favorite;
}