// Models

// Exports
module.exports.list = list;
module.exports.add = add;

// Private functions
function list(data, cb) {
    data.list = [{
        name: 'Marcello Montenegro',
        age: 24
    }, {
        name: 'Karla Reyna',
        age: 56
    }];
    return cb(null, data);
}

function add(data, cb) {
    data.list.push({
        name: 'Julio',
        age: 23
    });
    return cb(null, data);
}