import { authTokenClient, multichainClient } from "./luniverseClients";

export default class Luniverse {
    static generateAuthToken = (
        environmentId: string,
        keyId: string,
        keySecret: string
    ) =>
        authTokenClient({
            url: "auth-token",
            method: "post",
            headers: {
                "X-Environment-ID": environmentId,
                "X-Key-ID": keyId,
                "X-Key-Secret": keySecret,
            },
        });

    static getAccountBalance = (
        accountAddress: string,
        assetType: string = "native",
        pageNum: number = 1,
        rpp: number = 10
    ) =>
        multichainClient({
            url: `/accounts/${accountAddress}/balance`,
            params: {
                type: assetType,
                page: pageNum,
                rpp: rpp,
            },
        });

    static getContractMetadata = (contractAddress: string, assetType: string) =>
        multichainClient({
            url: `/assets/${contractAddress}`,
            params: {
                type: assetType,
            },
        });

    static getDailyContractActiveAccounts = (
        contractAddress: string,
        startDate: string,
        endDate: string
    ) =>
        multichainClient({
            method: "get",
            url: `/stats/daily/contract/${contractAddress}/accounts`,
            params: {
                startDate,
                endDate,
            },
        });

    static getDailyContractActiveTransactions = (
        contractAddress: string,
        startDate: string,
        endDate: string
    ) =>
        multichainClient({
            method: "get",
            url: `/stats/daily/contract/${contractAddress}/transactions`,
            params: {
                startDate,
                endDate,
            },
        });
}
