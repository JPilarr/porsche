import axios from "axios";
import { useAuth } from "./auth";

const client = axios.create({ baseURL: process.env.REACT_APP_API });

const request = ({ ...options }) => {
  const { token } = useAuth();
  client.defaults.headers.common.Authorization = `Bearer ${token}`;

  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
