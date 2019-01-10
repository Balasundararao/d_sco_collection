var sys = require('sys');
var db  = require('riak-js').getClient();
var db = require('./node_modules/riak-js/lib').getClient()
var db = require('riak-js').getClient({host: "localhost", port: "8098"});

var releasebucket = "Release_bucket9";
//db.saveBucket('airlines', {search: true});
////var parent = 2    ? req.body.parentId  : 0;
////var rtype  = (!req.body.sel_activitytype) ? 0 : req.body.sel_activitytype;
////
//db.save(releasebucket, 3,{
//    id: 3,
//    name:"Blall",
//    parent:1
//});
////
////
//    db.get(releasebucket, 1, function(err,parent_data, parent_meta){
//        if(err) throw err;
//        console.log(parent_meta);
//        parent_meta.links.push({bucket:releasebucket, key:3, tag:3});
//        db.save(releasebucket, 1, parent_data, parent_meta);
//    });


db.getAll('Release_bucket11', function(err,data,meta){
    console.log(data);
});

//var release = {
//    id     : 1,
//    name   : "Hato",
//    parent : 0
//}
//db.save(releasebucket, release.id, release, {links:[{bucket:releasebucket, key:"3", tag:"3"}]});
//db.getAll(releasebucket, { where: { parent:2 }}, function(err,data){
//    console.log(data);
//});


//db.walk(releasebucket,'1',[{bucket:'_',tag:'_'}], function(err,data, meta){
//
//    ///meta.links.push({bucket:releasebucket, key:"3", tag:"3"})
//    //db.save(releasebucket, 6, data, meta);
//});

//db.get(releasebucket, '1', function(err,data, meta){
//    console.log(meta.links);
//    meta.links.push({bucket:releasebucket, key:"3", tag:"3"});
//    db.save(releasebucket, '1', data, meta);
//})


//db.search.add(releasebucket, {parent:'2'}, function(err, data){
//    console.log( data );
//});

//var arr = [];
////
//db.mapreduce.add(releasebucket)
//    .map(function(value, keyData, args){
//        //return [value.values[0].data];
//        var data = Riak.mapValuesJson(value)[0];
//        if( data.parent === 2 )
//            return [data];
//        else
//            return [];
//        //return [data];
//    })
//    .reduce('Riak.reduceSort')
//    .run(function(err, data) {
//        //if(err) throw err;
//        //console.log( data );
//        for (var i = 0; i < data.length; i++) {
//            console.log(data[i].id);
//        }
//    });




//db.get('flights', 'KLM-5034', function(err, flight, meta) {
//    if (err) console.log(err);
//    flight.status = 'delayed';
//    meta.links.push({ bucket: 'airlines', key: 'IBE', tag: 'operated_by' });
//    db.save('flights', 'KLM-5034', flight, meta);
//})

//db.mapreduce.add("bala_bucket")
//    .map('Riak.mapValuesJson')
//    .reduce('Riak.reduceSort', 'key')  ///'function(a,b){ return a.key-b.key }'
//    .run(function(err, data) {
//        //console.dir(data);
//        //res.json(data);
//        for (var i = 0; i < data.length; i++) {
//            console.log(data[i]);
//        }
//    });

//db.mapreduce.add("bala_bucket")
//    .map('Riak.mapValuesJson')
//    .reduce('Riak.reduceSort', 'function(a,b){ return a.key-b.key }')  ///'function(a,b){ return a.key-b.key }'
//    .run(function(err, data) {
//        for (var i = 0; i < data.length; i++) {
//            console.log(data[i]);
//        }});
/**
db.mapreduce.add("bala_bucket")
    .map(function(v) { return [Riak.mapValuesJson(v)[0]] })
    .run(function(err, data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    });
 **/

//db.mapreduce.add("bala_bucket")
//    .map(function(value, keyData, args){
//        //return [value.values[0].data];
//        var data = Riak.mapValuesJson(value)[0];
//        if(data.id && data.id == 1)
//            return [data];
//        else
//            return [];
//        //return [data];
//    })
//    .run(function(err, data) {
//        console.log(data);
//        //for (var i = 0; i < data.length; i++) {
//        //    console.log(data[i]);
//        //}
//    });

//db.mapreduce.add("Release_bucket2")
//    .map(function(value, keyData, args){
//        //return [value.values[0].data];
//        var data = Riak.mapValuesJson(value)[0];
//        if(data.fld_rtype_txt && data.fld_parent_id_int == args["test"])
//            return [data];
//        else
//            return [];
//        //return [data];
//    },{test:"1"})
//    //.map(function(value,keyData,args){
//    //    var data = Riak.mapValuesJson(value)[0];
//    //    return [data];
//    //})
//    .run(function(err, data) {
//        //for (var i = 0; i < data.length; i++) {
//            console.log(data);
//
//        //}
//    });


//db.mapreduce
//    .add('Release_bucket2')
//    .map(function(value, keyData, args){
//        var data = Riak.mapValuesJson(value)[0];
//        if(data.fld_rtype_txt !== args["test"])
//            return [data];
//        else
//            return [];
//    },{test:"1"})
//    .reduce('Riak.reduceSort')
//    .run(function (err, flights) {
//        console.log(flights)
//    })



//db.mapreduce
//    .add({"bucket":"Release_bucket2", "key_filters":[["less_than_eq", "3"]]})
//    .map(function(value, keyData, args){
//        var data = Riak.mapValuesJson(value);
//        //if(data.fld_rtype_txt !== args["test"])
//        //    return [data];
//        //else
//        //    return [];
//        return data;
//    },{"test":"0"})
//    .run(function (err, data) {
//        console.log(data)
//    })


//db.mapreduce
//    .add({"bucket":"Release_bucket2"})
//    .map(function(value, keyData, args){
//        var data = Riak.mapValuesJson(value);
//        //if(data.fld_rtype_txt !== args["test"])
//        //    return [data];
//        //else
//        //    return [];
//        return data;
//    },{"test":"0"})
//    .run(function (err, data) {
//        console.log(data)
//    })




//db.mapreduce.add("bala_bucket")
//    .map('Riak.mapByFields', {
//    id: "2"
//    }).run(function(err, data) {
//        console.log(data);
//    });

//db.mapreduce.add("Release_bucket2")
//    .map(function(value, keyData, args){
//        //return [value.values[0].data];
//        var data = Riak.mapValuesJson(value);
//        return data;
//    }).run(function(err, data) {
//        console.log(data);
//    });
/**
db.mapreduce
    .add('airlines')
    .link({
        bucket: 'flights',
        keep: false
    })
    .map('Riak.mapValuesJson')
    .reduce(['Riak.filterNotFound',
        function (value, count) {
            return value.slice(0, count - 1)
        }
    ])
    .run(function (err, flights) {
        console.log(flights)
    })
*/



//db.get('Release_bucket','1', function(err,data,meta){
//    if(err)throw err;
//    meta.links.push({ bucket: 'Release_bucket', key: '2', tag: '1_2' });
//    db.save('Release_bucket', '2', {id:2, name: 'BALA', parent_id:"1"})
//})


//db.save('Release_bucket', '1', {id:1, name: 'THUNGA', parent_id:"0"});

//db.save('airlines', 'KLM', {fleet: 111, country: 'NL'}, { links:
//    [{ bucket: 'flights', key: 'KLM-8098', tag: 'cargo' },
//        { bucket: 'flights', key: 'KLM-1196', tag: 'passenger' }]
//})

db.walk('airlines', 'KLM', [{bucket: 'flights', tag: "_"}], function(err,data){
    for(i=0; i<data.length; i++){
        console.log(data[i]);
    }
    //console.log(data);
});

//curl -X PUT http://localhost:8098/riak/Release_bucket/2   -H "Content-Type: application/json"  -H "Link: </riak/Releas_bucket/2>; riaktag=\"v21\"" -d '{"id": 2, "name":"Sundar", "parent_id":1}'

//db.save('bala_bucket', '4', {id:4, name: 'THUNGA'});


//db.exists("flights", "KLM-8098", function(err,data){console.log(data)});

//db.buckets(function(err, data){
//    console.log( data );
//});

//---- GET -----
/**
 *
 *
 db.get('animals','dolly', function(err,data){
    if(err) throw err;
    console.dir( data)
})
 */
//db.getAll("Release_bucket2",{where:{fld_id_int:"1"}},function(err,data){
//    console.dir(data);
//})



//----- ADD / UPDATE -----
/**
 var counter = 0;
 db.count("Release_bucket2", function(err,data){
    if (err) throw err;
    counter = data + 1;
    console.log("Counter " + counter);
     db.save("Release_bucket2", counter,{
    "fld_id_int": counter,
    "fld_projectname_txt":"Planned_activity",
    "fld_rtype_txt":"actual",
    "fld_branch_txt": "BR_TEST_123",
    "fld_tag_txt": "TAG_BR_TEST_123",
    "fld_environment_txt":"DEV",
    "fld_snapshot_txt" :"BR_SNAPSHOT_123",
    "fld_version_txt" :"1.0",
    "fld_future_date_dt":"2001-10-10",
    "fld_actual_start_dt":"2010-10-10",
    "fld_actual_end_dt":"2010-10-10",
    "fld_requestedby_txt":"balasundar",
     fld_parent_id_int   :"2"
    });
});
 **/

//curl -X PUT http://localhost:8098/buckets/Release_bucket1/keys/1 -H 'Content-Type: application/json' -d  '{ "fld_txt_projectname":"Planned_activity", "fld_txt_rtype":"planned", "fld_dt_created": "", "fld_txt_requested_by":"bala", "fld_txt_branch" :"BR_TEST_123", "fld_int_parent_id" : 0}'


//-----DELETE-----
//db.remove("animals","dolly")
//db.exists("animals")
//delete : curl -v -X DELETE http://localhost:8098/buckets/Release_bucket1/keys/3

/**
 META OBJECT
 db.save("bucket", key, data, META, function(err,data,META){})
 db.get( 'animals','polly',function(err,data,meta){
    meta.addLink({bucket:'vm', key:'v8', tag:'vm'});
    db.save('animals','polly',data,meta)
}) */

//// MAP REDUCE
//db.add("Release_bucket2")
//    .map('Riak.mapValueJson')
//    .run(function(err, data){
//        console.log(data);
//    })

//----- MAP REDUCE  1-----
//db.mapreduce.add("Release_bucket2")
//    .map("Riak.mapValuesJson")
//    .run(function(err,data){
//        console.log(data)
//    });

//----- MAP REDUCE  2-----
//db.mapreduce.add("Release_bucket2")
//    .map({name: 'Riak.mapValuesJson', keep: true })
//    .run(function(err,data){
//        console.log(data)
//    });

// ----- MAP REDUCE 3 -----
//db.mapreduce.add('Release_bucket2').map(function(v) { return [Riak.mapValuesJson(v)[0]] }).run(function(err, data){
//    console.log(data);
//});
//
//db.mapreduce.add('Release_bucket2')
//    .map('Riak.mapValuesJson')
//    .run(function(err,data){
//        console.log(data)
//    });

//db.search.find("Release_bucket2","BR_TEST_123", function(err,data){
//    console.log(data);
//})

//db.query("Release_bucket2",{fld_parent_id_int:'2'}, function(err,data){
//    console.log(data);
//})


/***
 curl -XPOST http://localhost:8098/mapred \
 -H 'Content-Type: application/json' \
 -d '{
"inputs":"Release_bucket2",
    "query":[{"map":{"language":"javascript",
    "source":"function(riakObject) {
        var val = riakObject.values[0].data.match(/2/g);
        return [[riakObject.key, (val ? val.length : 0 )]];
}"}}]}'


 curl -X POST http://localhost:8098/mapred \
 -H "Content-Type: application/json" \
 -d '{
         "inputs":"Release_bucket2",
         "query":[{
            "map":{
                "language":"javascript",
                "source":"function(value, keyData, arg) {
                var data = Riak.mapValuesJson(value)[0];
if(data.fld_id_int && data.fld_id_int > 6)
    return [value.key];
else
    return [];
}"}}]}'

 curl -X POST http://localhost:8098/mapred \
 -H "Content-Type: application/json" \
 -d '{
"inputs":"Release_bucket2",
    "query":[{
    "map":{
        "language":"javascript",
        "source":"function(value, keyData, arg) {
        var data = Riak.mapValuesJson(value)[0];
if(data.fld_rtype_txt && data.fld_rtype_txt == arg)
    return [value.key];
else
    return [];
}", "arg":"planned"}}]}'

 */

//db.save('airlines', 'ALM', {fleet: 111, country: 'AL'},
//{ links:
//    [
//        { bucket: 'flights', key: 'KLM-1196', tag: 'passenger' }]
//})

//db.getAll("flights",function(err,data){
//    console.dir(data);
//})