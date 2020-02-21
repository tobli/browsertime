#!/usr/bin/env sh
set -x

choco install curl
choco install unzip

curl -o $TRAVIS_BUILD_DIR/ffmpeg.zip https://github.com/ncalexan/geckodriver/releases/download/v0.24.0-android/ffmpeg-4.1.1-win64-static.zip

unzip $TRAVIS_BUILD_DIR/ffmpeg.zip -d $TRAVIS_BUILD_DIR/ffmpeg

echo "SUCCESS 1"

$TRAVIS_BUILD_DIR/ffmpeg/bin/ffmpeg.exe

echo "SUCCESS 2"

$TRAVIS_BUILD_DIR/ffmpeg/bin/ffmpeg.exe --help

echo "SUCCESS 3"

export PATH="$TRAVIS_BUILD_DIR/ffmpeg/bin/:$PATH"
