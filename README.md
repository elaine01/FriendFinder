# Superhero Finder

A short personality test that matches the user with a superhero.

There are 10 questions with answers from 1 (Strongly Disagree) to 5 (Strongly Agree). After the user submits the questionnaire, the values are taken and compared against all previous user answers in the database, and a match is returned. The recommended match is defined as one with the lowest absolute difference against the current user responses.

## Demo
Superhero Finder is deployed on Heroku [here](https://superhero-finder.herokuapp.com/).

## Installation

To demo on your local:
```
git clone repo
cd into the folder
npm install
node server.js
localhost:8080 in browser
```

## Technology
```
HTML
CSS
Bootstrap
Node.js
Express

express - npm
body-parser - npm
```