#!/bin/bash
LOG="/opt/wem/cq/crx-quickstart/logs/replicationnew.log.0"
HOST="wemapp-author-prod1-01"
DC1="wemxweb-publish-prod1-01"
DC2="wemxweb-publish-prod2-01"
DXD="/nas/web-publish-cache"

date=`date "+%Y%m%d-%H_%M"`

scp wemadm@$HOST:$LOG replication.log

grep "Replication .*ACTIVATE) of " replication.log | sed 's#.*ACTIVATE. of /content/\(.*\) successful\..*#/c/\1#' | sort -u  > assetslist.txt

grep "/c/dam/assets/" assetslist.txt > assets-tobe-deleted

cat assetslist.txt | grep "/c/" | grep -v "/c/dam/assets/" | grep -v "/c/en/us/" | grep -v "\.text" | grep -v "\.apt" \
	| grep -v "\.list" | grep -v "\.conf" | grep -v "\.log" | grep -v "\.ini" | grep -v "\.in" | grep -v "\.mak" \
	| grep -v "\.sql" | grep -v "\.def" | grep -v "\.inc" | grep -v "\.map" | grep -v "\.bas" | grep -v "\.vb" \
	| grep -v "\.txt" | grep -v "\.html" | grep -v "\.shtml" | grep -v "\.asp" | grep -v "\.htm" | grep -v "\.m2a" \
	| grep -v "\.mp2" | grep -v "\.m3a" | grep -v "\.mp3" | grep -v "\.mp2a" | grep -v "\.mpga"| grep -v "\.m3u" \
	| grep -v "\.xlsm" | grep -v "\.xlsm" | grep -v "\.zip" | grep -v "\.pptx" | grep -v "\.ppt" | grep -v "\.pps" \
	| grep -v  "\.pot" | grep -v "\.xla" | grep -v "\.xlc" | grep -v "\.xls" | grep -v "\.xlm" | grep -v "\.xlt" \
	| grep -v "\.xlw" | grep -v "\.pdf" | grep -v "\.dot"  >> assets-tobe-deleted

while read -r url; do
	url="$DXD/$url"
	echo "Removing..$url"
    name=`basename $url`
    dir=`dirname $url`
    file=`echo $name | sed 's#\(.*\)\..*#\1#'`
    tail=`echo $name | sed 's#\(.*\)\.\(.*\)#\2#'`
    if [[ "$name" = *.book ]] || [[ "$name" = *.doc ]] || [[ "$name" = *.fm ]] || [[ "$name" = *.fmx ]] || [[ "$name" = *.fmb ]] || [[ "$name" = *.docx ]]; then
    	dir1=`echo $dir | sed 's#/c/dam/\(.*\)#/c/\1#'`

        ssh -n -l xxwem $DC1 "rm -f $dir1/$file.*pdf; rm -f $dir1/$file.*epub; rm -f $dir1/$file.*mobi; rm -rf $dir/$file.$tail/; if [ $tail = 'book' ]; then rm -rf  $dir1/$file; fi; i
f [ -d $url ]; then rm -rf $url; fi; rm -f $dir/$file.*$tail;"  >> assets.log.$date 2>&1 &
        ssh -n -l xxwem $DC2 "rm -f $dir1/$file.*pdf; rm -f $dir1/$file.*epub; rm -f $dir1/$file.*mobi; rm -rf $dir/$file.$tail/; if [ $tail = 'book' ]; then rm -rf  $dir1/$file; fi; i
f [ -d $url ]; then rm -rf $url; fi; rm -f $dir/$file.*$tail;"  >> assets.log.$date 2>&1 &
    else
    	ssh -n -l xxwem $DC1 "if [ -d $url ]; then rm -rf $url; fi; rm -f $dir/$file.*$tail;"  >> assets.log.$date 2>&1 &
    	ssh -n -l xxwem $DC2 "if [ -d $url ]; then rm -rf $url; fi; rm -f $dir/$file.*$tail;"  >> assets.log.$date 2>&1 &
fi
sleep 0.2
done < assets-tobe-deleted

mv assets-tobe-deleted "assets-tobe-deleted_$date"
