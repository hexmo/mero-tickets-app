import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const API_URL = "https://mero-tickets.herokuapp.com";
// const API_URL = "http://10.0.2.2:3000/";
// const API_URL = "http://127.0.0.1:3000/";

const instance = axios.create({ baseURL: API_URL });

// https://stackoverflow.com/questions/57033617/create-axios-instance-with-taking-token-from-asyncstorage
instance.interceptors.request.use(
  async (config) => {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    const authHeaders = jsonValue != null ? JSON.parse(jsonValue) : null;

    console.log(authHeaders);

    if (authHeaders != null) {
      config.headers[config.method] = {
        "access-token": authHeaders["access-token"],
        client: authHeaders["client"],
        uid: authHeaders["uid"],
      };
    }

    return config;
  },
  (error) => {
    console.log("Axios interceptors.request");
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    // Do not save any data if access-token is blank
    // batch_request_buffer_throttle: https://devise-token-auth.gitbook.io/devise-token-auth/config/initialization#:~:text=batch_request_buffer_throttle

    if (response.headers["access-token"] != "") {
      const authHeaders = {
        "access-token": response.headers["access-token"],
        client: response.headers["client"],
        uid: response.headers["uid"],
        expiry: response.headers["expiry"],
        "token-type": response.headers["token-type"],
      };

      const jsonValue = JSON.stringify(authHeaders);
      console.log("Saved auth headers headers");
      console.log(jsonValue);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    }

    console.log("Response headers");
    console.log(response.headers);
    return response;
  },
  (error) => {
    console.log("Axios interceptors.response");
    console.log(error);
    return Promise.reject(error);
  }
);

const removeData = async () => {
  await AsyncStorage.removeItem("@storage_Key");
};

export default instance;
export { removeData };

// references
// async storage: https://react-native-async-storage.github.io/async-storage/docs/usage/
// axios instance: https://axios-http.com/docs/instance
// axios interceptors: https://axios-http.com/docs/interceptors
//
// devise token auth - how to access response header info using javascript?
// https://stackoverflow.com/questions/48105729/devise-token-auth-how-to-access-response-header-info-using-javascript

// required fields for devise token auth
// access-token
// client
// uid
