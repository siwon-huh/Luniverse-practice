import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Luniverse from "../apis";
import { KEYS } from "../constants";

interface Args {
    address: string | undefined;
    assetType: string;
    page?: number;
    rpp?: number;
}

interface Item {
    amount: number;
    asset: {
        contract: string;
        name: string;
        symbol: string;
        path: string;
        type: string;
        supply: string;
        decimals: number;
    };
    tokens?: {
        id: string;
        name: string;
        uri: string;
    };
}

const useGetAccountBalance = ({
    address,
    assetType,
    page = 1,
    rpp = 10,
}: Args): UseQueryResult<ResponseWithItems<Item>> =>
    useQuery({
        queryKey: [KEYS.QUERY_ACCOUNT_BALANCE, assetType, page, rpp, address],
        queryFn: () => {
            if (!address) return;
            return Luniverse.getAccountBalance(address, assetType, page, rpp);
        },
        enabled: !!address,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default useGetAccountBalance;
