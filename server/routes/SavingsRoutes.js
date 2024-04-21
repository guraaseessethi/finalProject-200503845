import { Router } from "express";
import cors from "cors";
import { isAuthenticated } from "../controllers/AuthenticationController.js";
import {
    
    addSavings,
    showSavings,
    editSavings,
    createSavings,
    updateSavings,
    deleteSavings
} from "../controllers/SavingsController.js";

const router = Router();
const corsOptions = { origin: process.env.HOST || "http://localhost", optionsSuccessStatus: 200 };

router.use(isAuthenticated);
router.get("/", cors(corsOptions), addSavings);
router.get("/new", cors(corsOptions), addSavings);
router.get("/:id", showSavings);
router.get("/:id/edit", cors(corsOptions), editSavings);
router.post("/", cors(corsOptions), createSavings);
router.put("/:id", cors(corsOptions), updateSavings);
router.delete("/:id", cors(corsOptions), deleteSavings);

export default router;
