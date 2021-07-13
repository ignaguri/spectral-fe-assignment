import { ASSETS_URL, MEASUREMENTS_URL } from "../config";
import assetsMock from "../mocks/assets.json";
import measurementsMock from "../mocks/measurements.json";

export default (error) => {
  const requestedURL = error.config.url;

  switch (requestedURL) {
    case ASSETS_URL:
      return { data: assetsMock };
    case MEASUREMENTS_URL:
      return { data: measurementsMock };
    default:
      return Promise.reject(error);
  }
};
