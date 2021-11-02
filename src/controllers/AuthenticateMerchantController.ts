import { Request, Response } from 'express';
import { AuthenticateMerchantService } from '../services/AuthenticateMerchantService';

class AuthenticateMerchantController{
  async handle(request: Request, response: Response) {
    const authenticateMerchantService = new AuthenticateMerchantService();
    try {
      const result = await authenticateMerchantService.execute();

      return response.status(200).json(result);
    }
    catch (err) {
      return response.json(err);
    }
  }
}

export { AuthenticateMerchantController }