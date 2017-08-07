// Libs
const async = require('async');
const VirginLib = require('./virgin.lib');

// Exports
module.exports.list = list;
module.exports.add = add;

// Private functions
function list(req, res, next) {
    let data = {};
    VirginLib.list(data, (err, response) => {
        if (err) {
            return next(err);
        }
        return res.status(200).send(response);
    });
}

function add(req, res, next) {
    let data = {};
    let functions = [
        async.apply(VirginLib.list, data),
        VirginLib.add
    ];

    async.waterfall(functions, (err, response) => {
        if (err) {
            return next(err);
        }
        return res.status(200).send(response);
    });
}