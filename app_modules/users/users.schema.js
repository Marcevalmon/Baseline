// Libs
const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: { type: String, default: '', required:true, trim: true },
    primaryLastName: { type: String, required: true },
    secondLastName: { type: String, trim: true },
    fullName: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true, unique: true, required: true },
    createdBy: {
        _id: { type:mongoose.Schema.Types.ObjectId },
        fullname: { type: String, trim:true }
    },
    exp: { type: Number },
    modules: {},
    permissions: {}
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

let createFullName = function(next) {
    let fullName = '';
    if (this.name) fullName += this.name;
    if (this.primaryLastName) fullName += ` ${this.primaryLastName}`;
    if (this.secondLastName) fullName += ` ${this.secondLastName}`;
    this.fullName = fullName;
    this.lastUpdate = new Date();
    return next();
};

userSchema.pre('save', createFullName);

module.exports = mongoose.model('users', userSchema);
