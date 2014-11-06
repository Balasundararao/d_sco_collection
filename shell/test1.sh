#!/bin/bash
host_name="localhost:4502 www.cisco.cm:4503 uvw\@yahoo.com";
read -a hostnames <<<$host_name

echo ${hostnames[@]};
echo $hostnames;

arr=(`echo $hostnames | tr ':' ' '`)
echo ${arr[0]};
echo ${arr[1]};