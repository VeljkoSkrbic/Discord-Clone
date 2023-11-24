module.exports = (sequelize, DataTypes) => {
    const Channel = sequelize.define("Channel", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false
        } ,
        server_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Channel;
}