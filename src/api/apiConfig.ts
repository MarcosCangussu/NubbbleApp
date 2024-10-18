import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.ohM2MTseh0xKX2HfEAVwuBBqLAOH4nxW5zBHYTuMV3KGEqi6QMBndqmxM5Fv',
  },
});
