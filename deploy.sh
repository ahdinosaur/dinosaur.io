#!/bin/sh

grunt deploy

# fix where grunt deploy fails
cp -r build/fonts .grunt/grunt-gh-pages/gh-pages/deploy 
cd .grunt/grunt-gh-pages/gh-pages/deploy
git add .
git commit -m "grunt deploy misses fonts"
git push origin master
