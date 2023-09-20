const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(
    `Shutting down the server due to the Handling Uncaught Exception`
  );
  server.close(() => {
    process.exit(1);
  });
});
dotenv.config({ path: "backend/config/config.env" });

// connectDatabase
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(
    `Shutting down the server due to the unhandled Promise Rejection `
  );
  server.close(() => {
    process.exit(1);
  });
});
