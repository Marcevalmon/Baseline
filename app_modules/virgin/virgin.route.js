// Controllers
const VirginCtrl = require('./virgin.ctrl')

module.exports = app => {
    // @apiId API-BL-VIRGIN-01
    app.route('/private/virgin/list').get(VirginCtrl.list);
    // @apiId API-BL-VIRGIN-02
    app.route('/private/virgin/add').get(VirginCtrl.add);
};