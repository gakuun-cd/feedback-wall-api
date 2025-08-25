const mongoose =require('../db/db')

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,//必需
        unique:true//唯一，不可重复

    },
    password:String,
    age:Number,
    city:String,
    gender:{
        type:Number,
        default:0//0保密，1男，2女
    }
},{
    timestamps:true //时间戳
})
const User=mongoose.model('user',UserSchema)

// 导出 User 模型
module.exports = User ;