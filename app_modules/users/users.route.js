// Controllers
const usersCtrl = require('./users.ctrl')

module.exports = app => {
    // @apiId API-BL-USERS-01
    app.route('/privates/users').post(usersCtrl.createUser);
    // @apiId API-BL-USERS-02
    app.route('/privates/users').get(usersCtrl.createUser);
};