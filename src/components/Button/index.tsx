import styled from "styled-components";
import theme from "../../data/theme";

const Button = styled.button`
    background-color: ${theme.ButtonBgColor};
    border-radius: ${theme.borderRadius};
    color: ${theme.white};
    padding: 0.5em 1em;
    font-size: 1.5em;
    &:hover {
    background-color: ${theme.white};
    color: ${theme.ButtonBgColor};

    }
`

export default Button;
