import axios from 'axios';
import { HttpMethod } from '../constants';

class HttpService {
//   baseURL = process.env.BASE_URL;
  constructor() {
    this.http = axios.create({
      baseURL: "./data",
      withCredentials: false,
      headers: this.setupHeaders()
    });
  }

  getAuthorization() {
    const accessToken = 'hhdhdhhdh6e67';
    return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
  }

  service() {
    this.injectInterceptors();
    return this;
  }

  setupHeaders(hasAttachment = false) {
    return hasAttachment
      ? { 'Content-Type': 'multipart/form-data', ...this.getAuthorization }
      : { 'Content-Type': 'application/json', ...this.getAuthorization };
  }

  //   Handle HTTP requests
  async request(method, url, options) {
    try {
      const response = await this.http.request({ method, url, ...options });
      return response.data;
    } catch (error) {
      return this.normalizeError(error);
    }
  }

  //   Perform GET request
  async get(url, params = {} || params, hasAttachment = false) {
    return this.request(HttpMethod.GET, url, {
      params,
      headers: this.setupHeaders(hasAttachment)
    });
  }

  //   Perform POST request
  async push(url, payload, params = {} || params, hasAttachment = false) {
    return this.request(HttpMethod.POST, url, {
      params,
      data: payload,
      headers: this.setupHeaders(hasAttachment)
    });
  }

  //   perform update request
  async update(url, payload, params = {} || params, hasAttachment = false) {
    return this.request(HttpMethod.PUT, url, {
      params,
      data: payload,
      headers: this.setupHeaders(hasAttachment)
    });
  }

  //   Perform Delete request
  async remove(url, params = {} || params, hasAttachment = false) {
    return this.request(HttpMethod.DELETE, url, {
      params,
      headers: this.setupHeaders(hasAttachment)
    });
  }

  //   inject interceptors for request and response
  injectInterceptors() {
    //  Set up request interceptors
    this.http.interceptors.response.use((request) => {
      return request;
    });
    // Set up response interceptors
    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // implement a global error alert
        return Promise.reject(error);
      }
    );
  }

  //   Normalize errors
  normalizeError(error) {
    return Promise.reject(error);
  }
}

export const http = new HttpService();

export default HttpService;
