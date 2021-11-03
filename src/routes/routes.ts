import { Router } from "express";
import { AuthenticateMerchantController } from "../controllers/AuthenticateMerchantController";
import { GetMerchantDetailsController } from "../controllers/GetMerchantDetailsController";
import { ListMerchantProductsController } from "../controllers/ListMerchantProductsController";

const routes  = Router();

routes.post('/login', new AuthenticateMerchantController().handle);

routes.get('/merchant/:merchantId', new GetMerchantDetailsController().handle);

routes.get('/merchant/:merchantId/products', new ListMerchantProductsController().handle);

export { routes }