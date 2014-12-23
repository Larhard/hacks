#!/bin/sh

out=$1
shift

gs \
       -dBATCH \
       -dNOPAUSE \
       -q \
       -sDEVICE=pdfwrite \
       -sOutputFile="$out" \
       $@
