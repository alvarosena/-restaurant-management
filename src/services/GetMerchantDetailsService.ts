import axios from 'axios';

class GetMerchantDetailsService{
  async execute(merchantId: string, authToken: string) {
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