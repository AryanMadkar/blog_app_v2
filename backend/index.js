require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { route } = require("./routes/user.routes");
const router = require("./routes/user.routes");
const dbConnect = require("./database/dbCOnnect");
const cookieParser = require("cookie-parser");
// Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
}));
app.use(cookieParser());
app.use("/user", router);

// Routes

const server = async () => {
  await dbConnect();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
