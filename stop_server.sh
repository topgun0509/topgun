#!/bin/bash
if [ -f server.pid ]; then
  kill -- -$(cat server.pid)
  rm server.pid
fi
