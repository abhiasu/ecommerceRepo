
var mongoose = require('mongoose');

module.exports = function(){
    const uri= 'mongodb://localhost/meandb';
    mongoose.set('useCreateIndex', true);
    mongoose.connect(uri,{ useNewUrlParser: true })
    .then(() => console.log('connect with mongoDB'))
    .catch(err => console.log('Could not connect with mongoDB', err));
}



