import axios from 'axios';

interface IRequest{
  merchantId: string;
  authToken: string;
}

class GetMerchantDetailsService{
  async execute({merchantId, authToken}: IRequest) {
    const url = `https://merchant-api.ifood.com.br/merchant/v1.0/merchants/${merchantId}`;

    const response = await axios.get(url, {
      headers: {
        "Authorization": "Bearer" + authToken,
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    return response.data;
  }
}

export { GetMerchantDetailsService }