const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

server.express.use(cookieParser());

// decond JWT for user id on requests
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // enter user id into the request
    req.userId = userId;
  }
  next();
});

// middleware to populate requests
server.express.use(async (req, res, next) => {
  // if logged in
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    "{ id, permission, email, name }"
  );
  req.user = user;
  next();
});

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
