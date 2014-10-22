//var sys = require('sys');
//var db  = require('riak-js').getClient();
//var db = require('./node_modules/riak-js/lib').getClient()
//var db = require('riak-js').getClient({host: "localhost", port: "8098"});

var HttpClient = require('../lib/http-client');
db = new HttpClient({ port: 8098 });

bucket = 'users-riak-js-tests';

db.save(bucket, 'test-search@gmail.com',
    {
        email: 'test-search@gmail.com',
        name: 'Testy Test for Riak Search'
    },
    function(err, data, meta) {
        meta.key.should.equal('test-search@gmail.com');
        meta.statusCode.should.equal(204);
        done();
    });

//    db.mapreduce.search(bucket, 'm')
//        .map('Riak.mapValuesJson')
//        .run(function(err, data) {
//            should.not.exist(err);
//            should.exist(data);
//            data.length.should.equal(1);
//            data[0].email.should.equal('test-search@gmail.com');
//
//            done();
//        });
