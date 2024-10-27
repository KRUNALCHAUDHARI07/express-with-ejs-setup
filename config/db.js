const { DataSource } = require('typeorm');
const Post = require('../model/post.model');
const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [Post],
  });
const db = async() => {
await AppDataSource.initialize()
.then(()=> {
    console.log('db connected successfully');
})
.catch((err) => {
    console.error('Error during Database connection:', err);
  });
}
module.exports = {AppDataSource,db};

  
  