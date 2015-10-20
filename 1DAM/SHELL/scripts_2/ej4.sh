#!/bin/bash

if test $# = 1
then
	for i in `seq 0 1 10`
	do
		echo "$1 * $i = $[ $1*$i ]"
	done
else
	echo "nº de argumentos incorrecto"
	exit 1
fi

exit 0
