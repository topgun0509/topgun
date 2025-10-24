#!/bin/bash
nohup python3 -m http.server 44899 --bind 0.0.0.0 &
echo $! > server.pid
