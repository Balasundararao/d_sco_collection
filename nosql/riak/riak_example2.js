#!/bin/sh
curl -X POST \
-H "content-type: application/json" \
-d @- \
http://localhost:8098/mapred \
<<EOF
{
  "inputs":"Release_bucket11",
  "query": [{
      "map": {
        "language": "javascript",
        "source": "function(v) { return [v.values[0].data] }"
      }
    },
    {
      "reduce": {
        "language": "javascript",
        "source": "function(val) { var flat = val.reduce(function(a,b){return a.concat(b)}); return flat; }"
      }
    }]
}
EOF

# "inputs":"Release_bucket11",
# "inputs":{"bucket":"rooms", "key_filters":[["string_to_int"], ["less_than", 1000]] },
# "inputs":[["Release_bucket11","1"],["Release_bucket11","2"],["Release_bucket11","3"]],
#
#
#
#
#
#