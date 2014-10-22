#!/bin/bash
# parameters...
# 1.src
# 2.dest

# Check for required arguments
if [ $# -ne 4 ]; then
    echo "Should proivde the parameters..
        1.Source ( username:password@localhost:port )
        2.destination ( username:password@localhost:port )
    "
    exit 1
fi

echo "vlt rcp -r  http://$1/crx/-/jcr:root$3 http://$2/crx/-/jcr:root$4"

#./design_sync.sh admin:admin@localhost:4502 admin:admin@bthunga.cisco.com  /content/en/us/test/cl/c22 /content/en/us/test/cl/c22
