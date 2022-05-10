import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";
import {ReactComponent as HamburgerIcon} from "../../assets/images/icon-hamburger.svg";

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


