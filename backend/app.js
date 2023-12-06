import express from "express";
import cors from "cors";
import crudRoutes from "./routes/crud.routes.js";

const app = express();

// CORS Configuration
app.use(cors());

// Body Parsing Middleware
app.use(
  express.json({
    limit: "10kb",
  })
);

// urlencoded Middleware
app.use(express.urlencoded({ extended: true }));

// Express Static File Middleware
app.use(express.static("/"));

// ROUTES
app.use("/api/v1/crud", crudRoutes);

export default app;
