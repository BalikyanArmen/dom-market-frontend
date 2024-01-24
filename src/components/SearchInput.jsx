import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "@emotion/styled";

const SearchInput = React.memo(() => {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        const delayedHandleSearch = setTimeout(() => {
            console.log("Searched Text:", searchText);
            inputRef.current.focus(); // Set focus back to the input
        }, 500);

        return () => clearTimeout(delayedHandleSearch);
    }, [searchText]);

    const handleInputChange = useCallback((e) => {
        setSearchText(e.target.value);
    }, []);

    const handleSearchButtonClick = useCallback(() => {
        console.log("Searched Text:", searchText);
        inputRef.current.focus(); // Set focus back to the input
    }, [searchText]);

    const InputHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    border: solid 1px rgb(230, 230, 230);
    border-radius: 5px;
    width: 300px; /* Adjust width as needed */
    height: 48px;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
  `;

    const SearchInput = styled.input`
    flex: 1;
    border: none;
    padding: 0 12px;
    height: 100%;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Roboto, sans-serif;
    font-weight: initial;
    outline: none;
  `;

    const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: rgb(235, 235, 235);
    box-sizing: border-box;
    padding: 0 12px;
    border: none;
    cursor: pointer;
  `;

    const SearchIcon = styled.span`
    width: 24px;
    height: 24px;
    position: relative;
  `;

    const ChevronRight = styled.svg`
    width: 7px;
    height: 11px;
    position: absolute;
    left: 7px;
    top: 9px;
    right: 11px;
    bottom: 4px;
    transform: rotate(-90deg);
    transform-origin: top left;
  `;

    return (
        <InputHeader>
            <SearchInput
                type="text"
                placeholder="Поиск"
                value={searchText}
                onChange={handleInputChange}
                ref={inputRef} // Set the ref for the input
            />
            <SearchButton onClick={handleSearchButtonClick}>
                <SearchIcon>
                    <ChevronRight xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="black"
                            d="M4.175 5.575L0.275 1.675C0.0916667 1.49167 0 1.25833 0 0.975C0 0.691667 0.0916667 0.458333 0.275 0.275C0.458333 0.0916667 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916667 1.675 0.275L6.275 4.875C6.375 4.975 6.44583 5.08333 6.4875 5.2C6.52917 5.31667 6.55 5.44167 6.55 5.575C6.55 5.70833 6.52917 5.83333 6.4875 5.95C6.44583 6.06667 6.375 6.175 6.275 6.275L1.675 10.875C1.49167 11.0583 1.25833 11.15 0.975 11.15C0.691667 11.15 0.458333 11.0583 0.275 10.875C0.0916667 10.6917 0 10.4583 0 10.175C0 9.89167 0.0916667 9.65833 0.275 9.475L4.175 5.575Z"
                        />
                    </ChevronRight>
                </SearchIcon>
            </SearchButton>
        </InputHeader>
    );
});

export default SearchInput;
