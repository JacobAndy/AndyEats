require("dotenv").config();
const express = express(),
  app = express(),
  session = require("express-session"),
  { json } = require("body-parser"),
  cors = require("cors"),
  port = process.env.PORT || 3001;

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1814400000 //3 weeks
    }
  })
);

app.listen(port, () => console.log(`Magic Happens on ${port}`));
