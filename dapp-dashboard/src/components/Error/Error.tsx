import { AxiosError } from "axios";
import React, { useCallback } from "react";
import {
    Btn,
    Container,
    ErrorTitle,
    ErrorMsg,
    Box,
    BtnBox,
} from "./Error.styled";

interface Props {
    error: AxiosError<AxiosData> | Error;
    onClick?: Function;
}
interface AxiosData {
    code: string;
    message: string;
    result: boolean;
}

const Error: React.FC<Props> = ({ error, onClick }) => {
    // Handle on click Exit button
    const handleOnClick = useCallback(() => {
        if (!onClick) window.location.reload();
        else onClick();
    }, []);

    return (
        <Container>
            <ErrorTitle>Opps! Error occurred😱</ErrorTitle>
            <Box>
                <ErrorMsg>{error.name}</ErrorMsg>
                <ErrorMsg>{error.message}</ErrorMsg>
                <BtnBox>
                    <Btn onClick={handleOnClick}>Reload</Btn>
                </BtnBox>
            </Box>
        </Container>
    );
};

export default Error;
