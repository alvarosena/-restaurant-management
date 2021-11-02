import { Router } from "express";
import { AuthenticateMerchantController } from "../controllers/AuthenticateMerchantController";
import { GetMerchantDetailsController } from "../controllers/GetMerchantDetailsController";

const routes  = Router();

routes.post('/login', new AuthenticateMerchantController().handle);

routes.get('/merchant/:merchantId', new GetMerchantDetailsController().handle);

export { routes }