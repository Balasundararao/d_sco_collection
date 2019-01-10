curl http://localhost:8098/riak?buckets=true
curl http://localhost:8098/riak/people
curl http://localhost:8098/riak/people?keys=true


curl -i -X POST http://localhost:8091/riak/pages  -H "Content-Type: application/json"  -d '{"nickname" : "Sergeant Stubby", "breed" : "Terrier"}'

curl -v -X PUT http://localhost:8098/riak/pages/abc -H "Content-type:text/html"  -d "<html><body><h1>This is the test page</h1></body></html>"
curl -v -X PUT http://localhost:8098/riak/pages/def -H "Content-type:application/json"  -d '{"nickname" : "The Wonder Dog", "breed" : "German Shepherd"}'
curl -X PUT http://localhost:8098/riak/pages/linkwalk  -H "Content-type: image/png"  --data-binary @linkwalk.png
curl -v -X PUT http://localhost:8098/riak/pages/def?returnbody=true -H "Content-type:application/json"  -d '{"nickname" : "The Wonder Dog1", "breed" : "German Shepherd"}'


curl -i -X DELETE http://localhost:8098/riak/pages/def  ( No keys in the bucket will be destroyed )

Links:

curl -X PUT -H "content-type:application/json"   -H 'Link: </riak/hb/second>; riaktag="foo", </riak/hb/third>; riaktag="bar"' http://localhost:8098/riak/hb/first --data "hello"
curl -X PUT -H "content-type: application/json" -H 'Link:</riak/hb/fourth>; riaktag="foo"'  http://localhost:8098/riak/hb/second --data "the second"
curl -X PUT -H "content-type: application/json" -H 'Link:</riak/hb/fourth>; riaktag="foo"'  http://localhost:8098/riak/hb/third --data "the third"
curl -X PUT -H "content-type: application/json" http://localhost:8098/riak/hb/fourth --data "the fourth"

Link Walk :
curl http://localhost:8098/riak/hb/first/hb,foo,1
curl http://localhost:8098/riak/hb/first/hb,bar,1
curl http://localhost:8098/riak/hb/first/_,_,_/_,_,_
curl http://localhost:8098/riak/hb/first/_,_,1/_,_,_

map and reduce:

curl -v -d '{"inputs":[["hb","first"]],"query":[{"link":{}},{"map":{"language":"javascript","source":"function(v) { return [v]; }"}}]}'  -H "content-type:application/json"  http://localhost:8098/mapred
curl -v -d '{"inputs":[["hb","first"]],"query":[{"link":{"tag":"foo"}},{"map":{"language":"javascript","source":"function(v){ return [v]; }"}}]}'  -H "content-type:application/json"  http://localhost:8098/mapred
curl -v -d '{"inputs":[["hb","first"]],"query":[{"link":{}},{"link":{}},{"map":{"language":"javascript","source":"function(v) { return [v]; }"}}]}'  -H "content-type:application/json"  http://localhost:8098/mapred
curl -v -d '{"inputs":[["hb","first"]],"query":[{"link":{}},{"link":{}},{"reduce":{"language":"erlang","module":"riak_mapreduce","function":"reduce_set_union"}},{"map":{"language":"javascript","source":"function(v){ return [v]; }"}}]}'  -H "content-type:application/json"  http://localhost:8098/mapred




Index:
curl  -v -X PUT  -H "content-type: application/json" -d "OPAQUE_VALUE" -H 'x-riak-index-category_bin:armor' -H 'x-riak-index-price_int:400' http://localhost:8098/riak/pages/gauntlet24
curl  -v http://localhost:8098/buckets/pages/index/category_bin/armor
curl  -v http://localhost:8098/buckets/pages/index/price_int/300/500


curl -X POST -H 'x-riak-index-twitter_bin: rustyio' -H 'x-riak-index-email_bin: rusty@basho.com' -d '...user data...' http://localhost:8098/buckets/users/keys/rustyk

curl  -v http://localhost:8098/buckets/people/index/alias_bin/fran

curl -v -d -H "content-type:application/json"  http://localhost:8098/mapred
'{
    "inputs": [
    [
        "hb",
        "first"
    ]
],
    "query": [
    {
        "link": {

        }
    },
    {
        "map": {
            "language": "javascript",
            "source": "function(v) { return [v]; }"
        }
    },{
        "reduce": {
            "language": "javascript",
            "source": "function(v) { return [v]; }"
        }
    }
]
}'