import { Router } from "express";
import { AuthenticateMerchantController } from "../controllers/AuthenticateMerchantController";

const routes  = Router();

routes.post('/login', new AuthenticateMerchantController().handle);

export { routes }