import axios, { AxiosInstance } from 'axios';

const createInstance = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
  });

  return setInterceptors(instance);
};

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      // 요청을 보내기 전에 수행할 일
      return config;
    },
    (error) => {
      // 오류 요청을 보내기전 수행할 일
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      // 응답 데이터를 가공
      return response.data.data;
    },
    (error) => {
      // 오류 응답을 처리
      return Promise.reject(error);
    }
  );
  return instance;
};

export const request = createInstance();
