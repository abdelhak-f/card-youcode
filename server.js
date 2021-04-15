// require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const passport = require("passport");
// const cors = require ("cors");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,
      useUnifiedTopology: true}
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(() => console.log('faild to connect with database!'));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`hi Server running on port ${PORT} !`));
