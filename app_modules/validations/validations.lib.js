// Libs
const util = require('util');

module.exports.validateParams = validateParams;

function validateParams(verifyParams, cb) {
    verifyParams()
        .then(result => {
            if (!result.isEmpty()) {
                return cb('Existen problemas de validación: ' + util.inspect(result.array()));
            }
            return cb(null);
        });
};