import express from "express";
import FormsController from "../controllers/FormsController";


const router = express.Router();

router.get("/data",FormsController.getAllData);
router.get("/data/:id",FormsController.getData);
router.post("/data",FormsController.CreateData);
router.put("/data/:id",FormsController.UpdateData);
router.delete("/data/:id",FormsController.DeleteData);


export default router;