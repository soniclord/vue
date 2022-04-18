/**
 * Заготовка для apiClient.js
 * Подразумеваеться, что будем создавать экземпляр axios.
 * Вешать interceptor-ы:
 *   Добавляющий к запросу базовый URL, всякие LongSessionID, ApiVersion и т.п.
 *   Обрабатывающитй каким-то образом ответ
 * Затем уже на основе этого экземпляра делать все запросы к Api
 */
import axios from "axios";

const apiClient = axios.create();

// Add a request interceptor
apiClient.interceptors.request.use(
  function (config) {
    console.log("apiClient.interceptors.request success", config);
    // Do something before request is sent
    return config;
  },
  function (error) {
    console.log("apiClient.interceptors.request error", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  function (response) {
    console.log("apiClient.interceptors.response success", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log("apiClient.interceptors.response error", error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default apiClient;
