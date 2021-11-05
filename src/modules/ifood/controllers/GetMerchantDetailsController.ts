import { Request, Response } from 'express';
import { GetMerchantDetailsService } from '../services/GetMerchantDetailsService';

class GetMerchantDetailsController{
  async handle(request: Request, response: Response) {
    try {
      const { merchantId } = request.params;
      const authToken = request.headers.authorization;

      const getMerchantDetailsService = new GetMerchantDetailsService();
      
      const merchantDetails = await getMerchantDetailsService.execute(merchantId, authToken);

      return response.json(merchantDetails);
    } 
    catch (err) {
      return response.json(err);
    }
  }
}

export { GetMerchantDetailsController }