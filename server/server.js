require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//this lets our front-end at port 3000 make calls to our back-end at port 8000. Taking it away will result in "cors errors" when attemptnig your axios calls!
app.use(
    cors({
        credentials: true, //adding ability to use credentials with cookies
        origin: "http://localhost:3000",
    }),
);

//configuring the server to accept and update cookies
app.use(cookieParser());

require("./config/mongoose.config");
// adding routes to listen
require("./routes/user.routes")(app);
require("./routes/setups.routes")(app);
// Longhand:
// const musicianRoutes = require("./routes/musician.routes");
// musicianRoutes(app);

app.listen(8000, () => console.log("you are connected at port 8000"));