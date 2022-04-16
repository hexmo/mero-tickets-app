import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

// const API_URL = "https://mero-tickets.herokuapp.com";
const API_URL = "http://10.0.2.2:3000/";

const instance = axios.create({ baseURL: API_URL });

instance.interceptors.request.use(
  function (config) {
    getData().then((authHeaders) => {
      if (authHeaders != null) {
        config.headers[config.method] = {
          "access-token": authHeaders["access-token"],
          client: authHeaders["client"],
          uid: authHeaders["uid"],
        };
      }
    });

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    if (response.headers["access-token"]) {
      const authHeaders = {
        "access-token": response.headers["access-token"],
        client: response.headers["client"],
        uid: response.headers["uid"],
        expiry: response.headers["expiry"],
        "token-type": response.headers["token-type"],
      };

      storeData(authHeaders);
    } else {
      removeData();
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};

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
