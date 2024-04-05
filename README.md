# Pockylee Shop React App

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and includes a backend server implemented with `server.js`.

## Prerequisites

Before running the application, make sure you have [Node.js](https://nodejs.org/) installed on your system.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs both the app in development mode and the backend server concurrently.\
The React app will be open at [http://localhost:3000](http://localhost:3000) to view it in your browser, and the backend server will run at [http://localhost:8080](http://localhost:8080).

The page will reload when you make frontend changes.\
You may also see any lint errors in the console.

### `npm run server`

Runs just the backend server using `node server.js`.

### `npm run client`

Runs just the frontend React app in development mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

## Learn More

You can learn more about creating a React app in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Backend Server

The `server.js` is a Node.js Express server that serves as the backend for the Pockylee Shop. It is responsible for handling API requests to the DummyJSON API for product data.

Ensure that you have concurrently installed to run both servers with the `npm start` command. If not, install it using the following command:

### `npm install concurrently`

For more information about deployment and other available scripts, refer to the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Contributing

If you wish to contribute to the Pockylee Shop project, please submit a pull request or create an issue for discussion.