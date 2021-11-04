import axios from "axios";

class UpdateProductStatusService{
  async execute(merchantId: string, productId: string, authToken: string, status: string) {
    const url = `https://merchant-api.ifood.com.br/catalog/v1.0/merchants/${merchantId}/products/${productId}/status`;

    const response = await axios.patch(url, {
      data: {
        status: `${status}`
      }
    }, {
      headers: {
        "Authorization": "Bearer" + authToken,
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    return response.data;
  }
}

export { UpdateProductStatusService }