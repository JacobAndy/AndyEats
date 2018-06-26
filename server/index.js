require("dotenv").config();
const express = require("express"),
  app = express(),
  session = require("express-session"),
  { json } = require("body-parser"),
  cors = require("cors"),
  massive = require("massive"),
  port = process.env.PORT || 3001;

app.use(json());
app.use(cors());

massive(process.env.DATABASE_KEY)
  .then(db => app.set("db", db))
  .catch(err => console.log(`Error on database key set = ${err}`));

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
