import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function get<T>(config: AxiosRequestConfig): Promise<T> {
  config.url = path(config.url!);
  config.method = "GET";
  const response: AxiosResponse<T> = await axios(config);
  return response.data;
}

export async function post<T>(config: AxiosRequestConfig): Promise<T> {
  config.url = path(config.url!);
  config.method = "POST";

  if (config.data instanceof FormData) {
    config.headers = { "Content-Type": "multipart/form-data" };
  } else {
    config.headers = { "Content-Type": "application/json" };
  }

  const response: AxiosResponse<T> = await axios(config);

  return response.data;
}

const path = (url: string): string => {
  let rootUrl = "";

  if (process.env.NODE_ENV === "production") {
    rootUrl = "/cm";
  }

  let finalPath = "";

  if (url.startsWith("/")) {
    finalPath = rootUrl + url;
  } else if (url.startsWith("http://") || url.startsWith("https://")) {
    finalPath = url;
  } else {
    finalPath = url;
  }

  return finalPath;
};
