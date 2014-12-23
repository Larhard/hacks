#!/bin/sh

out=$1
shift

in=$1
shift

gs \
  -o "$out" \
  -sDEVICE=pdfwrite \
  -dDEVICEWIDTHPOINTS=405 \
  -dDEVICEHEIGHTPOINTS=602 \
  -dFIXEDMEDIA \
  -c "<</Install {-105 -90 translate}>> setpagedevice" \
  -f "$in"
