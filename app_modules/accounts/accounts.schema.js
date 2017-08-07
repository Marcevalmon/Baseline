const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

let accountSchema = new mongoose.Schema({
    user_id: { type: String, lowercase: true, trim: true }
});

accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', accountSchema);