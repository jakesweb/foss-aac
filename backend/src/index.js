require("dotenv").config();
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO: use express middleware to handle JWT cookies
// TODO: use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => {
    console.log(
      `Server is now running on URL http://localhost:${details.port}`
    );
  }
);