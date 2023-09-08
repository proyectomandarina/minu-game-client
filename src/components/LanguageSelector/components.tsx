import styled from "styled-components";
import theme from "../../data/theme";
import { ILanguagesProps } from "./types";

export const LanguageSelectorContainer = styled.div`
    background-color: ${theme.white};
    border-radius: ${theme.borderRadius};
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    transition: all 1s ease-in-out;
`
export const LanguageIcon = styled.img`
    width: 1.5em;
    height: 1.5em;
`

export const LanguageIconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const LanguagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25em;
`

export const LanguageText = styled.p<ILanguagesProps>`
    cursor: pointer;
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px 2.5px;
    background-color: ${props=>props.isCurrentLanguage?"#e4e4e4":null};
    &:hover{
        background-color: #e4e4e4
    }
`