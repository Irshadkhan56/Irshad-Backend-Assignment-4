import express from "express";
import {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

export default router;
