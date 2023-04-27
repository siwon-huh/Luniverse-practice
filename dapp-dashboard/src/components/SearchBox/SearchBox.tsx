import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useHandleOnEnter from "../../hooks/useHandleOnEnter";
import useInputFocusOnKeyDown from "../../hooks/useInputFocusOnKeyDown";
import { InputBox, SearchBtn, SearchInput } from "./SearchBox.styled";
import { isAddress } from "../../utils";

const SearchBox = () => {
    /* Hooks */
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    function searchAction() {
        if (!searchRef.current) return;
        if (!searchRef.current.value) return;
        if (!isAddress(searchRef.current.value)) {
            alert("Invalid address. Please try again.");
            return;
        }

        navigate(`/account/${searchRef.current.value}`);
    }

    useInputFocusOnKeyDown(searchRef, "/");
    useHandleOnEnter(searchAction);

    /* Handlers */
    const handleOnClickSearchBtn = useCallback((e: React.MouseEvent) => {
        e.preventDefault;
        searchAction();
    }, []);

    return (
        <InputBox>
            <SearchInput placeholder="Search account address" ref={searchRef} />
            <SearchBtn onClick={handleOnClickSearchBtn} />
        </InputBox>
    );
};

export default SearchBox;
