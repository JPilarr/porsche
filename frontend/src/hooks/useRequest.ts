import axios from "axios";
import { useAuth } from "utils/auth";

const client = axios.create({ baseURL: process.env.REACT_APP_API });

export const useRequest = () => {
  const { token } = useAuth();

  const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = `Token ${token}`;

    const onSuccess = (response: any) => response;
    const onError = (error: any) => {
      return error;
    };

    return client(options).then(onSuccess).catch(onError);
  };

  return { request };
};
