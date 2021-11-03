import axios from "axios";

class ListMerchantProductsService{
  async execute(merchantId: string, authToken: string, limit: number, page: number) {
    const url = `https://merchant-api.ifood.com.br/catalog/v1.0/merchants/${merchantId}/products`;

    const response = await axios.get(url, {
      headers: {
        "Authorization": "Bearer" + authToken,
        "Content-type": "application/json; charset=UTF-8"
      },
      params: {
        limit: `${limit}`,
        page: `${page}`
      }
    })

    return response.data;
  }
}

export { ListMerchantProductsService }