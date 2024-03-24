import { Router } from "express";
import { AddBooks } from "../controllers/user.controller.js";

const router = Router();

router.post("/home", AddBooks());

export default router;
