#!/bin/bash

if [ $1 -gt 0 ]
	then
		numeros=0
		resultado=0
		while [ $numeros -lt $1 ]
			do
				echo -n "Escribe el $[$numeros+1] número "
				read num
				resultado=$[$resultado+num]
				numeros=$[$numeros+1]
		done
		echo $resultado
	else
		echo "Imposible"
fi

exit 0
