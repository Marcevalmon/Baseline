// Models
const accountSchema = require('./accounts.schema');

// Exports
module.exports.duplicatedAccount = duplicatedAccount;
module.exports.createAccount = createAccount;

// Private functions
function duplicatedAccount(data, cb) {
    let user = data.user;

    accountSchema
        .findOne({username:user.email})
        .then(response => {
            if(response) {
                return cb({code:400, msg:'Usuario existente'});
            }
            return cb(null, data);
        }, error => {
            return cb({code:500, msg:'Ocurrio un error', error:error });
        });
}

function createAccount(data, cb) {
    let password = data.user.password;
    let account = accountSchema({
        username: data.user.email,
        user_id: data.user._id,
    });

    accountSchema
        .register(account, password, function(err, response){
            if(err){
                return cb({code:500, msg:'Ocurrio un error', error:err });
            }
            cb(null, data);
        })
}