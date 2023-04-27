import { useRef } from "react";
import Config from "../../config";
import useGenerateAuthToken from "../../hooks/useGenerateAuthToken";
import useHandleOnEnter from "../../hooks/useHandleOnEnter";
import {
    Btn,
    BtnWrap,
    Container,
    CopyIcon,
    Form,
    FormWrap,
    Input,
    InputBox,
    InputLabel,
    Title,
} from "./AuthTokenForm.styled";

const AuthTokenForm = () => {
    /** Refs **/
    const resultRef = useRef<HTMLInputElement>(null);
    const environmentIdRef = useRef<HTMLInputElement>(null);
    const keyIdRef = useRef<HTMLInputElement>(null);
    const keySecretRef = useRef<HTMLInputElement>(null);

    /** React-Query **/
    const authTokenMutation = useGenerateAuthToken();

    // Copy to Clipboard
    const copyToClipboard = (copyEl: HTMLInputElement) => {
        if (!copyEl.value) {
            alert("Nothing to copy");
            return;
        }

        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(copyEl.value)
                .then(() => alert(`Copied! \n ${copyEl.value}`))
                .catch(() => alert("Copy failed"));
        } else {
            // For older browsers
            const textarea = document.createElement("textarea");
            textarea.value = copyEl.value;
            document.body.appendChild(textarea);
            textarea.select();

            try {
                const successful = document.execCommand("copy");
                if (successful) {
                    alert(`Copied! \n ${copyEl.value}`);
                } else {
                    alert("Copy failed");
                }
            } catch (error) {
                alert("Copy failed");
            } finally {
                document.body.removeChild(textarea);
            }
        }
    };

    // Handle on Copy button
    const handleOnClickCopy = () => {
        if (!resultRef.current) return;
        copyToClipboard(resultRef.current);
    };

    // Submit input data to generate a new auth token
    const submitData = () => {
        let inputForm: HTMLFormElement | null =
            document.querySelector("#generate-form");

        // Check if required fields are filled out
        if (inputForm === null) throw "Input form is not existed.";
        if (!inputForm.checkValidity()) {
            inputForm.reportValidity();
            return;
        }
        if (
            !environmentIdRef.current ||
            !keyIdRef.current ||
            !keySecretRef.current
        ) {
            alert("Please fill out all required fields");
            return;
        }

        // Send a request to generate a auth token
        authTokenMutation.mutateAsync({
            environmentId: environmentIdRef.current.value,
            keyId: keyIdRef.current.value,
            keySecret: keySecretRef.current.value,
        });
    };

    // Set 'enter' to submit
    useHandleOnEnter(submitData);

    return (
        <Container>
            <FormWrap>
                <Title>Generate New Auth Token</Title>
                <Form id="generate-form">
                    <InputBox>
                        <InputLabel htmlFor="environmentId" required={true}>
                            Environment ID
                        </InputLabel>
                        <Input
                            id="environmentId"
                            name="environmentId"
                            required
                            placeholder=""
                            defaultValue={Config.ENVIRONMENT_ID}
                            ref={environmentIdRef}
                        />
                    </InputBox>
                    {/* Input1 end */}
                    <InputBox>
                        <InputLabel htmlFor="keyId" required={true}>
                            Key ID
                        </InputLabel>
                        <Input
                            id="keyId"
                            name="keyId"
                            required
                            placeholder=""
                            defaultValue={Config.KEY_ID}
                            ref={keyIdRef}
                        />
                    </InputBox>
                    {/* Input2 end */}
                    <InputBox>
                        <InputLabel htmlFor="keySecret" required={true}>
                            Key Secret
                        </InputLabel>
                        <Input
                            id="keySecret"
                            name="keySecret"
                            required
                            defaultValue={Config.KEY_SECRET}
                            ref={keySecretRef}
                        />
                    </InputBox>
                    {/* Input3 end */}
                    <InputBox>
                        <InputLabel htmlFor="result">
                            Generated Auth Token{" "}
                            {authTokenMutation.data && (
                                <CopyIcon onClick={handleOnClickCopy} />
                            )}
                        </InputLabel>
                        <Input
                            id="result"
                            required
                            type="text"
                            readOnly
                            value={authTokenMutation.data?.access_token || ""}
                            ref={resultRef}
                        />
                    </InputBox>
                    {/* Input4 end */}
                </Form>
                <BtnWrap>
                    <Btn to="" onClick={submitData}>
                        Submit
                    </Btn>
                </BtnWrap>
            </FormWrap>
        </Container>
    );
};

export default AuthTokenForm;
