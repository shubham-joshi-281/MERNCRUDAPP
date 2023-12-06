import crudModels from "../models/crud.models.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// Create Details Controller
const createController = asyncHandler(async (req, res) => {
  // get user from frontend
  const { name, email, age, contact, address } = req.body;

  // Now Validation For Empty Fileds
  if ([!name, !email, !age, !contact, !address].some((field) => field === "")) {
    throw new ApiError(401, `Fields Are Required`);
  }

  // Add Details With Create Method
  const addDetails = await crudModels.create({
    name,
    email,
    age,
    contact,
    address,
  });

  // Error Handling for Create Operation
  if (!addDetails) {
    throw new ApiError(500, "Something Went Wrong In Create Controller!!");
  }
  // Finally Details are Created Successfully
  return res.status(201).json({
    success: true,
    message: "Details Are Created Successfully !!",
    details: addDetails,
  });
});

// Get All Details Controller
const getAllController = asyncHandler(async (req, res) => {
  const getDetails = await crudModels.find();
  if (!getDetails) {
    throw new ApiError(404, "Document not found");
  }
  return res.status(200).json({
    totalCount: getDetails.length,
    success: true,
    message: "All Details Are Retrieved",
    getDetails,
  });
});

// Get Specific Detail With Detail.Id Controller
const getController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const getDetailsById = await crudModels.findById(id);
  if (!getDetailsById) {
    throw new ApiError(404, "Document not found");
  }
  return res.status(200).json({
    success: true,
    message: "Specific Detail Retrieved",
    getDetailsById,
  });
});

// Update Specific Detail With Detail.Id Controller
const updateController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updateDetailsById = await crudModels.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  // Handle the case where no document is found with the specified ID
  if (!updateDetailsById) {
    throw new ApiError(404, "Document not found");
  }
  return res.status(201).json({
    success: true,
    message: "Specific Detail Updated",
    updateDetailsById,
  });
});

// Delete Specific Detail With Detail.Id Controller
const deleteController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleteDetailsById = await crudModels.findByIdAndDelete(id);
  if (!deleteDetailsById) {
    throw new ApiError(404, "Document not found");
  }
  return res.status(201).json({
    success: true,
    message: "Specific Detail Deleted",
    deleteDetailsById,
  });
});

export {
  createController,
  getAllController,
  getController,
  deleteController,
  updateController,
};
