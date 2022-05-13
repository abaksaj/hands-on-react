import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import {ReactComponent as HamburgerIcon} from "../../assets/images/icon-hamburger.svg";

export const ButtonPosition = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-Direction: column;
`;


export const  ButtonPositionInner = styled.div`
    align-Self: end;
`;

export const  HamburgerMenu = styled.div`
    background-color: ${colors.BgPrimary};
    color: ${colors.Primary};
    padding: 10px;
    border-radius: 8px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
`;



export const HamburgerButton = styled(HamburgerIcon)`
    width:30px;
    height: auto;
    
    @media (${breakpoints.desktop}) {
        display: none;
        
    }

    path {
        fill: ${colors.BgPrimary};
        }
`;














