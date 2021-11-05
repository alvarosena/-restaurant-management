import { Router } from "express";
import { AuthenticateMerchantController } from "../modules/ifood/controllers/AuthenticateMerchantController";
import { GetMerchantDetailsController } from "../modules/ifood/controllers/GetMerchantDetailsController";
import { ListMerchantProductsController } from "../modules/ifood/controllers/ListMerchantProductsController";
import { UpdateProductStatusController } from "../modules/ifood/controllers/UpdateProductStatusController";

const routes = Router();

routes.post('/login', new AuthenticateMerchantController().handle);

routes.get('/merchant/:merchantId', new GetMerchantDetailsController().handle);

routes.get('/merchant/:merchantId/products', new ListMerchantProductsController().handle);

routes.patch('/merchant/:merchantId/products/:productId/status', new UpdateProductStatusController().handle);

export { routes }