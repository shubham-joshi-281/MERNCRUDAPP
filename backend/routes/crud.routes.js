// Import Router From Express Js
import { Router } from "express";
// Controller Files Import
import {
  createController,
  deleteController,
  getAllController,
  getController,
  updateController,
} from "../controller/crud.controller.js";

const router = Router();

// Create Route
router.post("/create", createController);

// Get-All Route
router.get("/get", getAllController);

// Get Specific Route
router.get("/get/:id", getController);

// Update Specific Route
router.patch("/update/:id", updateController);

// Delete Specific Route
router.delete("/delete/:id", deleteController);

export default router;
