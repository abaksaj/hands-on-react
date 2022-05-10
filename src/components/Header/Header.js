import React from "react";
import "../../components/Header/Header.scss"
import LogoImg from "../../assets/images/logo.svg"
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {
    Header as HeaderWrapper,
    HeaderInner,
    HeaderNavLink,
    LogoLink,
    LogoImg as LogoElement,
    Nav,
    ButtonLink
} from "./HeaderStyle";
import Hamburger from "../Hamburger/Hamburger";


const Header = ({ isSecondary }) => {

    return (

        <HeaderWrapper isSecondary={isSecondary}>
            <HeaderInner>
                <LogoLink to = '/'>
                    <LogoElement src={LogoImg} alt="logo" />
                </LogoLink>
                <Hamburger />
                <Nav>
                    <HeaderNavLink to="/Courses">Courses</HeaderNavLink>
                    <ButtonLink to = '/'>
                        <Button modifiers={['nav']}>Sign in</Button> 
                    </ButtonLink>
                    <ButtonLink to = '/'>
                        <Button modifiers={['nav', 'secondary']}> Register </Button>
                    </ButtonLink>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>

    );
    
   
};

export default Header;


