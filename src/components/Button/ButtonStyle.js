import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fonts, breakpoints } from "../../lib/style/theme";


 export const ButtonWrapper = styled.button`
    border: none;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 220px;
    background-color: ${colors.BgPrimary};
    color: ${colors.Primary};
    border-radius: 30px;
    font-weight: 500;
    text-transform: uppercase;
    &:hover {
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 3px 3px ${colors.TextPrimary});
    }
    &_nav {
        width: 150px;
        &:hover {
            transition: all 0.3s ease-in-out;
            filter: drop-shadow(0 3px 3px ${colors.TextPrimary});
        }
    }
    &_secondary {
        background: ${colors.Primary};
        color: ${colors.Secondary};
    }
    &_outline {
        border: 1px solid ${colors.Primary};
    }
    &_heading {
        width: 200px;
    }

`;



