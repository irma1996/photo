
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'irma',
    }
});
 
const bookshelf = require('bookshelf')(knex);
 
/*Photo*/
const Photo = bookshelf.model('Photo', {
    tableName: 'photos',
    albums(){
      return this.belongsToMany('Album')
    },
    users() {
        return this.belongsTo('User');
    }  
}); 
 /*Album*/
const Album = bookshelf.model('Album', {
    tableName: 'albums',
    photos() {
        return this.belongsToMany('Photo'); 
    },
    users() {
        return this.belongsTo('User');
    }    
}); 
 
 /*User*/
 const User = bookshelf.model('User', {  
    tableName: 'users',
    albums() {
        return this.belongsToMany('Album');
    },
    photos() {
        return this.belongsToMany('Photo');
    }
});



module.exports = {
    bookshelf,
     Photo,
     Album, 
     User
}