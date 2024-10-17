import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.zFHGVf1n10gL5-drMj8OIUBHmU-TwUyhaUL8y4kZZmNlXiXSvhWUSVYdhEXH',
  },
});
