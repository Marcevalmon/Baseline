// Libs
let bunyan = require('bunyan');
let fs = require('fs');

let verifyDirectory = done => {
    let dir = 'logs/';
    if (fs.existsSync(dir)) return done();
    fs.mkdir(dir, done);
};

let log = bunyan.createLogger({
    name: 'logger',
    streams: [{
        level: 'debug',
        stream: process.stdout
    }, {
        level: 'info',
        path: 'logs/info.log'
    }, {
        level: 'error',
        path: 'logs/error.log'
    }, {
        level: 'warn',
        path: 'logs/warn.log'
    }]
});

exports.info = params => {
    log.info(params);
}

exports.error = params => {
    log.error(params);
}

exports.warn = params => {
    log.warn(params);
}

exports.debug = params => {
    log.debug(params);
}

exports.console = params => {
    console.log(params);
}

verifyDirectory(err => {
    if (err) console.log('Error, no se pudo generar la carpeta.');
});