#!/bin/bash

# for i in {1..254}; do
for i in {25..50}; do
  ip="192.168.86.$i"
  if ping -c 1 -W 1 "$ip" >/dev/null 2>&1; then
    echo "Responding: $ip"
  fi
done
