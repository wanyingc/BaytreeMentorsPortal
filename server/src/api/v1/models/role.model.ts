import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    type: String,
    default: "mentor",
    enum: ["mentor", "youth_mentor", "into_school_mentor", "women_mentor", "admin", "moderator"]
});

const Role = mongoose.model(
  "Role",
  RoleSchema
);

export default Role;