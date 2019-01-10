var builtins = require('./node_modules/simpleriak/lib/builtins');
//var riak = require('simpleriak').createClient({ host: 'localhost', port: 8098, bucket: 'simple_bucket2' });
var riak = require('simpleriak').createClient({ host: 'localhost', port: 8098, bucket: 'Release_bucket11' });

//var release = {
//    id : 1,
//    name : "ABCD",
//    parent : 0
//}
//riak.put({key:release.id, data:release},{index:{type:"F", parent:"0"}});

//var release = {
//    id : 2,
//    name : "WXYZ",
//    parent : 1
//}
//riak.put({index:{type:"A", parent:"1"}},{key:release.id, data:release});
//
//var release = {
//    id : 3,
//    name : "DEFC",
//    parent : 1
//}
//riak.put({index:{type:"A", parent:"1"}}, {key:release.id, data:release});
//
//var release = {
//    id : 4,
//    name : "ABCD",
//    parent : 0
//}
//riak.put({index:{type:"F", parent:"0"}},{key:release.id, data:release});
//
//var release = {
//    id : 5,
//    name : "DEFC",
//    parent : 4
//}
//riak.put({index:{type:"A", parent:"4"}}, {key:release.id, data:release});


function map(v, keyData, arg) {
    var ret = [],
        index = v.values[0].metadata.index;
    //ret.push(v.values[0].metadata.index);

    if (index.type_bin === 'A') ret.push(JSON.parse(v.values[0].data));
    return ret;
};

//riak.mapred({ map: { source: map, arg: 'F' } }, function (err, reply) {
//    console.log(reply.data);
//});


riak.search({ query: 'type:F', rows: 10 }, function (err, reply) {
    console.log(reply);
});




//riak.put({  data: 'wppp, a string!' }, function (err, reply) {
//    console.log(reply.key); // the key riak created
//});

//riak.getBuckets(function (err, reply) {
//    console.log(reply.data);
//});

//riak.getKeys({ bucket: 'simple_bucket1' }, function (err, reply) {
//    console.log(reply.data);
//});

//riak.getKeys({ index: { key: 1 } }, function (err, reply) {
//    console.log(reply.data);
//});

//riak.getKeys({ search: 'data:wee, a string' }, function (err, reply) {
//    console.log(reply.data);
//});

//riak.getIndexes({ key: 'JQYGnDFXiufSXixvWOg6AfiR27C' }, function (err, reply) {
//    console.log(reply.data);
//});

//riak.put({ index: { creator: 'me' }, data: 'i put this here' }, function (err, reply) {
//    console.log(reply.key);
//});
//
//riak.resources(function (err, reply) {
//    console.log(reply.data); // full resources information from riak
//});

//riak.stats(function (err, reply) {
//    console.log(reply.data); // full stats object returned from riak
//});

//riak.ping(function (err, reply) {
//    console.log(reply.data); // 'OK'
//});
//riak.getIndexes({ key: 3 }, function (err, reply) {
//    console.log(reply.data);
//});

//riak.put({ key:6,   index: { creator: 'you' }, data: 'six of me' }, function (err, reply) {
//    console.log(reply.key);
//});

//riak.get({ key: 5 }, function (err, reply) {
//    console.log(reply.data); // returns { example: 'object' }
//});
//
//riak.get({ index: { parent:1 } }, function (err, reply) {
//    console.log(reply); // returns ['i put this here']
//});

//riak.get({ search: 'parent: "1"' }, function (err, reply) {
//    console.log(reply);
//});

//riak.get({ search: 'creator:me' }, function (err, reply) {
//    console.log(reply.data);
//});

//riak.get({ index: { parent: 1 } }, function (err, reply) {
//    console.log(reply); // returns ['i put this here']
//});


// ===== MAP REDUCE =====
//function map(v, keyData, arg) {
//    var ret = [],
//        index = v.values[0].metadata.index;
//    //ret.push(v.values[0].metadata.index);
//
//    if (index.parent_int === arg) ret.push(JSON.parse(v.values[0].data));
//    return ret;
//};
//
//riak.mapred({ map: { source: map, arg: 1 } }, function (err, reply) {
//    console.log(reply.data);
//});
//============================


