import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
dotenv.config({
  path: "./.env",
});

// Start Server
const PORT = process.env.PORT || 8080;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running At ${PORT} PORT`);
    });
  })
  .catch((error) => {
    console.log(`ERROR IN CONNECTION FAILED !! ${error}`);
  });
