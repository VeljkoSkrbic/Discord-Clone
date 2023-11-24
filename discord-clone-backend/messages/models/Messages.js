module.exports = (sequelize, DataTypes) =>{
    const Message = sequelize.define("Message", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at:{
            type: DataTypes.TIME,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipient_user_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        channel_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })

    return Message;
};