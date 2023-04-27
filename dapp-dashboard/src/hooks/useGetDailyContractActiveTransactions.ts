import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Luniverse from "../apis";
import { KEYS } from "../constants";
import { getYYYYMMDD } from "../utils";

interface Args {
    address: string | undefined;
    startDate?: string;
    endDate?: string;
}

interface Item {
    date: string;
    count: string;
}

const today = new Date();
const todayDateTime = getYYYYMMDD(today);
const twoWeeksAgoDateTime = getYYYYMMDD(
    new Date(today.getTime() - 1000 * 60 * 60 * 24 * 14)
);

const useGetDailyContractTransactions = ({
    address,
    startDate = twoWeeksAgoDateTime,
    endDate = todayDateTime,
}: Args): UseQueryResult<ResponseWithItems<Item>> =>
    useQuery({
        queryKey: [
            KEYS.QUERY_HOURLY_CONTRACT_TRANSACTIONS,
            startDate,
            endDate,
            address,
        ],
        queryFn: () => {
            if (!address) return;
            return Luniverse.getDailyContractActiveTransactions(
                address,
                startDate,
                endDate
            );
        },
        enabled: !!address,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
    });

export default useGetDailyContractTransactions;
