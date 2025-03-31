const express = require("express");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectdb = require("./config/dbController");
const taskRouter = require("./routes/taskRouter");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
// Connect to database
connectdb();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Define a route to render the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Routes
app.use("/api", userRouter);
app.use("/api", taskRouter);

app.listen(port, () =>
  console.log(`Task Management system running at port ${port}`),
);
