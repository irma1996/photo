
const bcrypt = require('bcrypt');

module.exports = (bookshelf) => {
    return bookshelf.model('User', {  
            tableName: 'users',
                albums() {
                    return this.belongsToMany('Album');
                },photos() {
                    return this.belongsToMany('Photo');
            }
        },{
        hashSaltRounds: 10,
        async login(email, password) {
            const user = await new this({ email }).fetch({require: false });
                if (!user) {
                    return false;
            }    
             
        const hash = user.get('password');   
        
        return (await bcrypt.compare(password, hash))
                 ? user
                 : false;
        },
    
    });

}

