module.exports = (sequelize, DataTypes) => {
    const SharedLink = sequelize.define('SharedLink', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
    }, {
        tableName: 'SharedLinks',
    });

    SharedLink.associate = (models) => {
        SharedLink.belongsToMany(models.Favorite, { through: 'SharedLinkFavorites' });
    };

    return SharedLink;
};