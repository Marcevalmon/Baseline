let rootPath = require('path').normalize(__dirname + '/..');

module.exports = {
    development: {
        name: 'API Baseline Dev',
        port: 8001,
        secret_key: '4p1_84s3l1n3',
        url: 'http://localhost:8001',
        db: {
            url: 'mongodb://localhost',
            port: 27017,
            name: 'api_dev_db'
        },
        isProduction: false
    },
    test: {
        name: 'API Baseline Test',
        port: 8002,
        secret_key: '4p1_84s3l1n3',
        url: 'http://localhost:8002',
        db: {
            url: 'mongodb://localhost',
            port: 57020,
            name: 'api_test_db'
        },
        isProduction: false
    },
    production: {
        name: 'API Baseline Production',
        port: 8003,
        secret_key: '4p1_84s3l1n3',
        url: 'http://localhost:8003',
        db: {
            url: 'mongodb://localhost',
            port: 57020,
            name: 'api_production_db'
        },
        isProduction: true
    }
};