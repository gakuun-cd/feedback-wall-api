const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017'; 
const dbName = 'comment4'; 

mongoose.connect(`${url}/${dbName}`)
  .then(() => {
    console.log('mongodb 连接成功');
  })
  .catch(err => {
    console.error('mongodb 连接失败', err);
  });

const conn = mongoose.connection;

conn.on('error', (err) => {
  console.log('mongoose 连接出错', err);
});

  // 确保返回 mongoose 对象
module.exports = mongoose;