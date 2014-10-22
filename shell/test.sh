#!/bin/sh
hosts=(web03 web04 web05 web06 web07)

buildString=""
deployString=""


if [ "$setup" = true ] ; then
    buildString+="buildSetup,"
    deployString+="deploySetup,";
fi
if [ "$core" = true ] ; then
    buildString+=" buildCore,"
    deployString+=" deployCore,";
fi
if [ "$acl" = true ] ; then
    buildString+=" buildacl,"
    deployString+=" deployacl,";
fi
if [ "$dm" = true ] ; then
    buildString+=" builddm,"
    deployString+=" deploydm,";
fi

#
#for i in ${hosts[@]}; do
#        echo " ${buildString}  ${i}"
#        #su $login -c "ssh $i sudo /usr/local/apache/bin/apachectl graceful"
#
#done
exit 0

#echo $buildString | sed 's/,*$//'
#echo $deployString | sed 's/,*$//'




#clean install -P buildSetup,buildCore,buildAcl,buildDm,buildTestDm
#
#
#deploy x branch to y env
#- and maybe setup some timing stuff
#
#within the build job
#
#params:
#	branch type:choice (list of open branches, manually is okay but it would be cool to hit wem-hooks/repo_lock -l)
#	env type:choice (dev, dev-int, meena's box)
#	profiles type:choice (buildSecurity,buildCore)
#
#
#exec:
#buildArr = []
#if security
#	push buildArr Security
#if core
#	push buildArr Core
#
#buildString=""
#for item each buildArr
#	buildString+item,
#	deployString=item,
#
#job does the build
#mvn clean install -P $buildString
#
#
#
## have a set of pre-defined env deploy dat files
#
#
#post build step exec shell
#. $evn.dat $deployString
#
#
#
#mvn clean install -P ARGV[0] -Dcrx.host=node1 -Dcrx.port=port
#mvn clean install -P ARGV[0] -Dcrx.host=node2 -Dcrx.port=port
#mvn clean install -P {deployBlah,deployBlah} -Dcrx.host=node3 -Dcrx.port=port
#mvn clean install -P {deployBlah,deployBlah} -Dcrx.host=node3 -Dcrx.port=port
#mvn clean install -P {deployBlah,deployBlah} -Dcrx.host=node4 -Dcrx.port=port
