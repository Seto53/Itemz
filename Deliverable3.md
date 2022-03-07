# Project updates for this deliverable

## Server technology
This project uses Node.js as the back-end API. 
As per now, we have some queries to access and update the user table and the drop table.
When running the backend, we load the database with some users and collectibles.

## Database Technology
A docker container is used to host a Postgres database that stores information about our users and collectibles.

## Automated tests
To test Node.js we are using Mocha. 
Currently, we only have dummy tests to make sure that the library is properly integrated.

To test React.js we use React's testing library. Currently, we only have dummy tests to make sure that the library is properly integrated.

## Deployment
We have 2 different docker-compose scripts. The default one (docker-compose.yml) only builds a container for the database and requires you to run the backend and frontend to be able to use the application for development.
Then we also have a production.yml, if this file is executed the whole application is containerized and can be accessed through http://localhost/

The full set up instructions can be found in [README.md](./README.md) under the 'Set up' title.

IT IS ABSOLUTLY NECESSARY TO HAVE ACCESS TO THE .env AND .env.prod FILES TO RUN THE APPLICATION.

## Frontend
This project uses a React.js application as the frontend.
Everythig is integrated together, one would be able to see some of the user's information in the profile tab (user with id 1 loaded when running the backend).
The application accesses the backend which takes the information from the containerized database.

### HTML and CSS
Every mockup file was modified to be used with React, and there were some improvements in the UI from deliverable 2.

![screenshot](https://i.imgur.com/30MfVRq_d.webp?maxwidth=1520&fidelity=grand)
![screenshot](https://i.imgur.com/iCImXxc_d.webp?maxwidth=1520&fidelity=grand)
