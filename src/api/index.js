import axios from "axios";

import { ASSETS_URL, MEASUREMENTS_URL } from "../config";
import responseInterceptor from "../api/responseInterceptor";

axios.interceptors.response.use(null, responseInterceptor);

export function getAssets() {
  return axios
    .get(ASSETS_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(`API ${error}`);
    });
}

export function getMeasurements() {
  return axios
    .get(MEASUREMENTS_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(`API ${error}`);
    });
}
