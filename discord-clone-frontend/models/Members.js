module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define("Member", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        server_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Member;
};

