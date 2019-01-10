var db  = require('riak-js').getClient();
var db = require('./node_modules/riak-js/lib').getClient()
var db = require('riak-js').getClient({host: "localhost", port: "8098"});


var releasebucket = "Release_bucket1";

db.get(releasebucket, 1, function(err,parent_data, parent_meta){
    if(err) throw err;
    parent_meta.links.push({bucket:releasebucket, key:2, tag:'tag_'+2+"_"+1});
    db.save(releasebucket, 1, parent_data, parent_meta);
});

//db.get(releasebucket, 1, function(err, data, meta) {
//   console.log(data);
//})

//db.mapreduce.add(releasebucket)
//    .map('Riak.mapValuesJson')
//    .reduce('Riak.reduceSort')  ///'function(a,b){ return a.key-b.key }'
//    .run(function(err, data) {
//        console.log(data);
//    });