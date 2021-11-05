import { Router } from "express";
import { AuthenticateMerchantController } from "../controllers/AuthenticateMerchantController";
import { GetMerchantDetailsController } from "../controllers/GetMerchantDetailsController";
import { ListMerchantProductsController } from "../controllers/ListMerchantProductsController";
import { UpdateProductStatusController } from "../controllers/UpdateProductStatusController";

const ifoodRoutes = Router();

ifoodRoutes.post('/login', new AuthenticateMerchantController().handle);

ifoodRoutes.get('/merchant/:merchantId', new GetMerchantDetailsController().handle);

ifoodRoutes.get('/merchant/:merchantId/products', new ListMerchantProductsController().handle);

ifoodRoutes.patch('/merchant/:merchantId/products/:productId/status', new UpdateProductStatusController().handle);

export { ifoodRoutes }