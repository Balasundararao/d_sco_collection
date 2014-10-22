#!/bin/bash
# parameters...
# 1.local path..
# 2.username:password
# 3.port
# 4.hostnames "host1 host2 host3"

# Check for required arguments
if [ $# -ne 4 ]; then
    echo "Should proivde the parameters..
        1.localpath
        2.username:password
        3.port
        4.hostname host1 host2 host3
    "
    exit 1
fi

# Param1
if [ -d "$1" ]; then
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
done

#./bundles.sh /Applications/XAMPP/xamppfiles/htdocs/Projects_Current/jenkins-maven-devops/bala admin:admin 4502 "localhost"

#for i in word1 word2 word3;
#do
#    echo $i
#done

#if [ "$interactive" = "1" ]; then
#    response=
#    echo -n "Enter name of output file [$filename] > "
#    read response
#    if [ -n "$response" ]; then
#        filename=$response
#    fi
#    if [ -f $filename ]; then
#        echo -n "Output file exists. Overwrite? (y/n) > "
#        read response
#        if [ "$response" != "y" ]; then
#            echo "Exiting program."
#            exit 1
#        fi
#    fi
#fi

#selection=
#until [ "$selection" = "0" ]; do
#    echo "
#    PROGRAM MENU
#    1 - Display free disk space
#    2 - Display free memory
#
#    0 - exit program
#"
#    echo -n "Enter selection: "
#    read selection
#    echo ""
#    case $selection in
#        1 ) df ;;
#        2 ) free ;;
#        0 ) exit ;;
#        * ) echo "Please enter 1, 2, or 0"
#    esac
#done

#number=1
#if [ $number = "1" ]; then
#    echo "Number equals 1"
#else
#   echo "Number does not equal 1"
#fi


#if [ $(id -u) != "0" ]; then
#    echo "You must be the superuser to run this script" >&2
#    exit 1
#fi

#
#if [ "$1" != "" ]; then
#    echo "Positional parameter 1 contains something"
#else
#    echo "Positional parameter 1 is empty"
#fi

#if [ $# -gt 0 ]; then
#    echo "Your command line contains $# arguments"
#else
#    echo "Your command line contains no arguments"
#fi

# echo "OPTIND starts at $OPTIND"
# while getopts ":pq:" optname
#     do
#         case "$optname" in
#             "p")
#             echo "Option $optname is specified"
#             ;;
#             "q")
#             echo "Option $optname has value $OPTARG"
#             ;;
#             *)
#             echo "Unknown error while processing options"
#             ;;
#         esac
#     done
#     echo "OPTIND starts at $OPTIND"
# echo "$#";
