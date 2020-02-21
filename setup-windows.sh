#!/usr/bin/env sh

choco install curl
choco install unzip

curl -o ffmpeg.zip https://github.com/ncalexan/geckodriver/releases/download/v0.24.0-android/ffmpeg-4.1.1-macos64-static.zip

unzip ffmpeg.zip -d ffmpeg

echo "SUCCESS 1"

ffmpeg/bin/ffmpeg.exe

echo "SUCCESS 2"

ffmpeg/bin/ffmpeg.exe --help

echo "SUCCESS 3"
