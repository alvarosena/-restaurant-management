import axios from "axios";

interface IAccessTokenResponse{
  accessToken: string;
}

class AuthenticateMerchantService{
  async execute() {
    const url = 'https://merchant-api.ifood.com.br/authentication/v1.0/oauth/token';

    const response = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        clientId: process.env.IFOOD_CLIENT_ID,
        clientSecret: process.env.IFOOD_CLIENT_SECRET,
        grantType: "client_credentials"
      },
      headers: {
        "Content-type":"application/x-www-form-urlencoded"
      }
    });

    return response.data;
  }
}

export { AuthenticateMerchantService }