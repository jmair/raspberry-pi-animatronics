# Raspberry PI GPIO Control and Audio Server

## Allow access to /dev/mem for sound playback

`sudo chmod g+rw /dev/mem`

## Place .wav files in /audio directory

## Install PM2

`sudo npm install -g pm2`

## Set PM2 to start on boot

- `pm2 startup`

- Copy and run script that is returned

## Install dependencies

`npm install`

## Start server

`node server.js`
