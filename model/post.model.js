// src/entity/Post.js
const { EntitySchema } = require('typeorm');

const Post = new EntitySchema({
    name: 'post',
    tableName: 'post',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        title: {
            type: 'varchar',
        },
        description: {
            type: 'text',
        },
    },
});

module.exports = Post;
