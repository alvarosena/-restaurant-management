import { Request, Response } from 'express';
import { UpdateProductStatusService } from '../services/UpdateProductStatusService';

class UpdateProductStatusController{
  async handle(request: Request, response: Response) {
    try {
      const { merchantId, productId } = request.params;
      const { status } = request.body;
      const authToken = request.headers.authorization;

      const updateProductStatusService = new UpdateProductStatusService();

      await updateProductStatusService.execute({merchantId, productId, authToken, status});

      return response.status(204).send();
    }
    catch (err) {
      return response.json(err);
    }
  } 
}

export { UpdateProductStatusController }