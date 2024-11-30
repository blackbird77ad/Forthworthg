import { Router } from "express";
import { submitContact } from "../controller/contact.js";

const contactRouter = Router();

//define entry points
contactRouter.post("/send-message", submitContact);

export default contactRouter;