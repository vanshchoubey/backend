import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config();
const PORT = process.env.PORT;
connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server started at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGODB CONNECTION FAILED:", err);
  });