import { Request, Response } from 'express';
import { ListMerchantProductsService } from '../services/ListMerchantProductsService';

class ListMerchantProductsController{  
  async handle(request: Request, response: Response) {
    try {
      const { merchantId } = request.params;
      const { limit, page } = request.query;
      const authToken = request.headers.authorization;
  
      const listMerchantProductsService = new ListMerchantProductsService();
  
      const result = await listMerchantProductsService.execute({merchantId, authToken, page, limit});
  
      return response.json(result);
    }
    catch (err){
      return response.json(err.message);
    }
  }
}

export { ListMerchantProductsController }