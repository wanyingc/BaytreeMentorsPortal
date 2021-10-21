import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    type: mongoose.Schema.Types.ObjectId,
    name: String
});

const Role = mongoose.model(
  "Role",
  RoleSchema
);

export default Role;