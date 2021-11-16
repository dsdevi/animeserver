const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.json());

//import routes
const showRoutes = require("./routes/showRoute");
const movieRoutes = require("./routes/movieRoute");
const userRoutes = require("./routes/userRoute");
const adminRoutes = require("./routes/adminRoute");

app.use("/show", showRoutes);
app.use("/movie", movieRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

//connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

//listen to the server
app.listen(3000);
