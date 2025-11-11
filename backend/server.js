const express = require("express");
const cors = require("cors");
require("dotenv").config(); 
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes.js"); 
const communityRoutes = require("./routes/community.routes.js");
const aiRoutes = require("./routes/ai.routes.js"); 

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/users", (req, res) => {
  res.json({ message: "User route is working!" });
});

app.use("/api/user", userRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/ai", aiRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
