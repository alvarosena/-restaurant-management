import { Router } from "express";
import { AuthenticateMerchantController } from "../controllers/AuthenticateMerchantController";
import { GetMerchantDetailsController } from "../controllers/GetMerchantDetailsController";
import { ListMerchantProductsController } from "../controllers/ListMerchantProductsController";
import { UpdateProductStatusController } from "../controllers/UpdateProductStatusController";

const routes = Router();

routes.post('/login', new AuthenticateMerchantController().handle);

routes.get('/merchant/:merchantId', new GetMerchantDetailsController().handle);

routes.get('/merchant/:merchantId/products', new ListMerchantProductsController().handle);

routes.patch('/merchant/:merchantId/products/:productId/status', new UpdateProductStatusController().handle);

export { routes }