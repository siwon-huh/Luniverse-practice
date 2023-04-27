import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Luniverse from "../apis";
import { KEYS } from "../constants";

interface Args {
    environmentId: string;
    keyId: string;
    keySecret: string;
}
interface Data {
    access_token: string;
}

const useGenerateAuthToken = () =>
    useMutation<any, any, any>({
        mutationKey: [KEYS.MUTATION_GENERATE_AUTH_TOKEN],
        mutationFn: ({ environmentId, keyId, keySecret }: Args) =>
            Luniverse.generateAuthToken(environmentId, keyId, keySecret),
        onSuccess: () => {
            alert("Created new auth token successfully!");
        },
        onError: (error: AxiosError) => {
            alert(
                `Creating auth token failed\n${error.message}\n${error.response?.data}`
            );
        },
    });

export default useGenerateAuthToken;
