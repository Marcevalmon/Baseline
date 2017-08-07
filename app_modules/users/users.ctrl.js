// Libs
const async = require('async');
const log = require('./../../logger');
const usersLib = require('./users.lib');
const accountsLib = require('./../accounts/accounts.lib');
const validationsLib = require('./../validations/validations.lib');

// Exports
module.exports.createUser = createUser;

// Private functions
function createUser(req, res, next) {
    req.checkBody('name', 'Nombre de usuario requerido.').notEmpty();
    req.checkBody('email', 'Email de usuario requerido.').notEmpty();
    req.checkBody('password', 'Contraseña requerida').notEmpty();

    validationsLib.validateParams(req.getValidationResult, mainProcess);

    function mainProcess(err) {
        if (err) {
            return res.status(400).send(err);
        }
        let data = {
            user: req.body
        };
        let functions = [
            async.apply(accountsLib.duplicatedAccount, data),
            usersLib.createUser,
            accountsLib.createAccount
        ];

        async.waterfall(functions, (err, response) => {
            if (err) {
                log.error(`${err.code} - ${err.msg} - ${err.error}`);
                return res.status(err.code).send(err);
            }
            return res.status(201).send(data.user);
        });
    }
}