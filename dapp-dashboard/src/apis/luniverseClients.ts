import axios from "axios";
import Config from "../config";

const PROTOCOL = "ethereum";
const NETWORK = "mainnet";

/* Multichain API instance */
const multichainClient = axios.create({
    baseURL: `/v1/${PROTOCOL}/${NETWORK}`,
    headers: {
        Authorization: `Bearer ${Config.AUTH_TOKEN}`,
    },
});

multichainClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.error("API call error: ", error);
        return Promise.reject(error);
    }
);

/* Auth-token instance */
const authTokenClient = axios.create({
    baseURL: "/v1",
});

authTokenClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.error("API call error: ", error);
        return Promise.reject(error);
    }
);

export { multichainClient, authTokenClient };
