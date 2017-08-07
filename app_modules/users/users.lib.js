// Models
const userSchema = require('./users.schema');

// Exports
module.exports.createUser = createUser;

// Private functions
function createUser(data, cb){
    let user = data.user;
    let newUser = userSchema(user);

    newUser
        .save()
        .then(response => {
            data.user._id = response._id;
            return cb(null, data);
        }, error => {
            return cb({code:500, msg:'Ocurrio un error', error:error });
        });
}