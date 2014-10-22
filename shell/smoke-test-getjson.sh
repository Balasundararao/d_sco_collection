#!/bin/bash
# parameters...
# 1.local path..
# 2.username:password
# 3.port
# 4.hostnames "host1 host2 host3"

# Check for required arguments
if [ $# -ne 4 ]; then
    echo "Should proivde the parameters..
        1.localpathtostore the json files.
        2.username:password
        3.port
        4.hostname host1 host2 host3
        ex: ./bundles.sh ~/tmp admin:admin 4502 'localhost wemapp-author-dev3-01 wemapp-author-dev3-02'
    "
    exit 1
fi

# Param1
if [ -d "$1" ]; then
    #if[ stat -c %a pwd ]

    #fi
    cd $1
else
    echo "'$1' Not a valid directory..."
    exit 1
fi

# Param2


# Param3
if [ ${#3} -ne 4 ]; then
    echo "$3 Not a valid port..."
    exit 1
fi

# Param4
for host in $4;
do
    if [ -f "$host"_bundles.json ]; then
        rm -rf "$host"_bundles.json
    fi
    curl -sL -u "$2"  "http://$host:$3/system/console/bundles.json" -o "$host"_bundles.json
    if [ -f "$host"_bundles.json ]; then
        echo  "${host}_bundles.json File is created..."
    else
        echo "${host}_bundles.json File is not created..."
        exit 1
    fi
done

#./bundles.sh /Applications/XAMPP/xamppfiles/htdocs/Projects_Current/jenkins-maven-devops/bala admin:admin 4502 "localhost"
./smoke-test-getjson.sh . admin:admin 4502 "bokchoy"