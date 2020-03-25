# Lodging Marketplace App: Reviews Service
1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Getting Started](#getting-started)
4. [License](#license)

![alt House](https://rachel-portfolio.s3.amazonaws.com/house.jpg)

# Overview
> Need somewhere to stay? Use this app to find the perfect place! This is one service out of five for the full application. [Full App Demo: Coming soon](link)

### Serivce Demo:
- [Visit Deployed Service](https://lodging-marketplace.herokuapp.com/)
- [Video Demo (Coming Soon)](YouTubeLink)

### Team Members

- Rachel Novoselac - [RachNovo](https://github.com/RachNovo) - Reviews Service (this is me :) )
- Johnathan Kwak - [jkwak09](https://github.com/jkwak09) - More Homes Service
- Brian Hambleton - [bhambleton123](https://github.com/bhambleton123) - Booking Service
- Emily Meeks - [minglewook](https://github.com/minglewook) Main Photo Carousel Service
- Dennis Kim - [dekim2324](https://github.com/dekim2324) House Info Service

### My Contribution
- Designed and built reviews service UI and back end
- Stabilized view size by designing algorithm that displays pagination selection bar, reducing reviews to seven per page, leading to improved site elegance
- Ensured app reliability by implementing end-to-end testing using Cypress
- Coordinated with team to deploy proxy with five services

# Technologies

* [Node/](https://nodejs.org/en/docs/)[Express](https://expressjs.com/) - Used to built and serve the back end
* [React.js](https://reactjs.org/) - The Front-End JavaScript Library Used
* [CSS Modules](https://css-tricks.com/css-modules-part-1-need/) - Used for Styling
* [Webpack.js](https://webpack.js.org/concepts/) - Used to Bundle My Components
* [MongoDB/](https://docs.mongodb.com/manual/)[Mongoose](https://mongoosejs.com/) - Database
* [AWS EC2](https://aws.amazon.com/ec2/) - Deployment
* [Cypress.io](https://www.cypress.io/) - End to End Testing
* [Trello](https://trello.com/) - Ticketing System to Assist with Project Management

# Getting Started
> Follow these steps to install and run this service on your local machine.

**Prerequisites:** Git, Node.js, npm

### Installing

First, navigate to the local directory where you want to host the service.

Next, access the service by cloning the Github repository:

```bash
$ git clone https://github.com/RachNovo/lodging-marketplace-app.git
```

Navigate inside the directory: 'lodging-marketplace-app' and run the following commands:
```bash
$ npm install
$ npm run build
$ npm run seedDB #wait 15 seconds before canceling the command
$ npm start
```
The service will now be available at: http://localhost:3000/

![Lodging-Marketplace-Demo](https://rachel-portfolio.s3.amazonaws.com/lodging-marketplace-demo.gif)

**Note:** It is currently set up to call a specific house for display purposes. To access house id's by url query, follow the instructions found in `client/src/index.jsx`.

### Testing
> Follow these instructions to run the tests.

### End To End Tests

Ensure the application is initialized and running on port:3000, then follow the instructions below:

```bash
npm run cypress
```

select 'Run all specs' in the window that opens:
![cypress-spec-runner](https://rachel-portfolio.s3.amazonaws.com/cypress-spec-runner.png)

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
