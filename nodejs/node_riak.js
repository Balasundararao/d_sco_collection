var db  = require('riak-js').getClient();
var db = require('./node_modules/riak-js/lib').getClient()
var db = require('riak-js').getClient({host: "localhost", port: "8098"});

var release1 = {
    id : 1,
    name : "ONE",
    parent : 0
};
var release2 = {
    id : 2,
    name : "TWO",
    parent : 1
};
var release3 = {
    id : 3,
    name : "THREE",
    parent : 1
};
var release4 = {
    id : 4,
    name : "FOUR",
    parent : 3
};
var release5 = {
    id : 5,
    name : "FIVE",
    parent : 3
};

//db.save('simple_bucket2', '1', release1, {index: {type: 'F', parent: 0 }});
//db.save('simple_bucket2', '2', release2, {index: {type: 'A', parent: 10 }});
//db.save('simple_bucket2', '3', release3, {index: {type: 'F', parent: 0 }});
//db.save('simple_bucket2', '4', release4, {index: {type: 'A', parent: 3 }});
//db.save('simple_bucket2', '5', release5, {index: {type: 'A', parent: 3 }});

//db.mapreduce.add('simple_bucket2')
//db.mapreduce.add('Release_bucket11')
//    .map(
//    function(value,keyData,arg){
//        var ret = [], index = value.values[0].metadata.index;
//        var data = value.values[0].data;
//        if(index.type_bin === arg.type) { ret.push(data); }
//        //ret.push(index);
//        return ret;
//    },{type:'ANP'})
//    .run(function(err,reply){
//        console.log(reply);
//    });
//db.mapreduce.add('Release_bucket11')
//    .map(function(value, keyData, args){
//        var ret=[];
//        var data  = value.values[0].data;
//        var index = value.values[0].metadata.index;
//        if(index.type_bin !== args.type) { ret.push(data); }
//        return ret;
//    },{type:'A'})
//    .reduce('Riak.reduceSort')
//    .run(function(err, data) {
//        console.log( data );
//    });
//


function map1(value, keyData, args){
    var result, orphans=[];
    var data  = JSON.parse(value.values[0].data);
    var index = value.values[0].metadata.index;
    return [index];
}

//
function map2(value, keyData, args){
    var ret=[];
    var data  = JSON.parse(value.values[0].data);
    var index = value.values[0].metadata.index;
    //return [index];
    if(index.parent_bin === '0'){
        return [data];
    }else return [];
}


db.mapreduce.add("Release_bucket11")
    .map(map1,{type:'F', parent:'0'})
    .run(function(err, item) {
        console.log(item);
//        for( key in item){
//            console.log( item[key].key );
//        }
    });



//db.query('people', { alias: 'fran' }, function(err,data,meta){
//    //console.log(data);
//    console.log(meta);cl
//});
//db.save('people', 'me', { age: 28 }, { index: { age: 28, alias: 'fran' } });


//// ===== MAP REDUCE =====
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
