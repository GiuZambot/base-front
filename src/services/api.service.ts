import axios, { AxiosInstance, AxiosRequestConfig, ResponseType } from 'axios';

export class ApiService {
  AuthenticatedApi: AxiosInstance;

  constructor(baseUri: string, token: string) {
    if (!baseUri) {
      throw new Error('the base uri was not provided');
    }
    if (!token) {
      throw new Error('the auth token was not provided');
    }

    this.AuthenticatedApi = axios.create({
      baseURL: baseUri,
      timeout: 180000,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  }

  public async Get(url: string, params?: any, responseType?: ResponseType) {
    const config: AxiosRequestConfig = {
      params,
    }
    if (!!responseType) {
      config.responseType = responseType
    }
    const response = await this.AuthenticatedApi.get(url, config);
    return response.data;
  }

  public async Post(url: string, model: any) {
    return this.AuthenticatedApi.post(url, model);
  }

  public async Put(url: string, model: any) {
    return this.AuthenticatedApi.put(url, model);
  }
}

export const buildApi = () => {
  const token = localStorage.getItem('token') || 'initial-token';
  return new ApiService('https://projectbase.vercel.app', token);
}
