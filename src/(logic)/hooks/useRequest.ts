import axios from "axios";
import { useState } from "react";

const baseUrl = "";

export const useRequest = () => {
  const [error, setError] = useState<{
    status: number;
    message: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const config = {
    headers: {},
  };

  const request = async ({
    url,
    data,
    method,
  }: {
    url: string;
    data?: any;
    method: "get" | "post";
  }) => {
    try {
      setIsLoading(true);
      setError(null);

      const res: any = axios[method](`${baseUrl}${url}`, data, config);

      setIsLoading(false);
      return res.data;
    } catch (err: any) {
      setIsLoading(false);
      setError({ status: err.response.status, message: err.response.data });
    }
  };

  const $request = {
    get: (url: string) => request({ url, method: "get" }),
    post: (url: string, data: any) => request({ url, method: "post", data }),
  };

  return { $request, isLoading, error };
};
