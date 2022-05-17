import styled from "styled-components";
import { colors } from "../../lib/style/theme";

 export const Button = styled.button`
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

    ${props => props.isNav && `
        width: 150px;
        &:hover {
            transition: all 0.3s ease-in-out;
            filter: drop-shadow(0 3px 3px ${colors.TextPrimary});
        }`
    }
    
    ${props => props.isSecondary && `
        background: ${colors.Primary};
        color: ${colors.Secondary}; `
    }

    ${props => props.isOutline && `
        border: 1px solid ${colors.Primary};`
    }

    ${props => props.isHeading  && `
        width: 200px;  `
    }

    ${props => props.isLanding  && `
        width: 220px;  `
    }
`;



