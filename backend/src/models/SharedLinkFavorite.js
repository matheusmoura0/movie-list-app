module.exports = (sequelize, DataTypes) => {
    const SharedLinkFavorite = sequelize.define('SharedLinkFavorite', {
        SharedLinkUuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            references: {
                model: 'SharedLinks',
                key: 'uuid'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        FavoriteId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Favorites',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    }, {
        tableName: 'SharedLinkFavorites',
    });

    return SharedLinkFavorite;
};
