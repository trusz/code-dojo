#!/bin/sh

cd /app
go get github.com/cortesi/modd/cmd/modd
 
go mod download && modd
