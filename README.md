# whats-reopening-web

[WhatsReopening.com](https://whatsreopening.com) is a community-driven website I'm currently developing to track places (establishments, geographic locations, and prominent points of interest), their current status, and when they're reopening during COVID-19. This repo is just for the front-end. The backend functions can be found [here](https://github.com/narwhal-sightings/narwhal-cloud-functions).

![](https://github.com/narwhal-sightings/whats-reopening-web/blob/master/src/assets/images/Screen%20Shot%202020-09-04%20at%203.31.19%20PM.png)

## Stack

The website is built with React for the front-end and Firebase (Firestore, Cloud Functions) for the backend. I’m using Material UI for the UI framework. Location data, photos, and the map are powered by Google Maps API.

## Features

### Place Verification using Google Maps API

In order for users to add places to the website, they must first search for the place to see if it exists using the Google Maps Places autocomplete textfield. This prevents the database from being clouded with duplicate or poor entries.

![](/https://github.com/narwhal-sightings/whats-reopening-web/blob/master/src/assets/images/Screen%20Shot%202020-09-04%20at%203.34.18%20PM.png)

### Shareable Links

Each filter that is applied is included as a URL parameter. The front page listens for changes to the URL to perform the appropraite query to the database. This allows users to share the places they are querying with others.

![](/https://github.com/narwhal-sightings/whats-reopening-web/blob/master/src/assets/images/Screen%20Shot%202020-09-04%20at%203.55.55%20PM.png)