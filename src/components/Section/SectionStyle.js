import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Section =  styled.section `
    ${props => props.isTestimonials && `
        background-color: ${colors.BgSecondary};`
    }
`;

export const SectionInner =  styled.div`
    @media (${breakpoints.desktop}){
        width: 960px;
        margin: 0 auto;
    }

    @media (${breakpoints.desktopLarge}){
        width: 1260px;
    }
`;

export const SectionActionText =  styled.span`
    display: block;
    color: ${colors.Primary};
    font-weight: 500;
    margin-bottom: 24px;
`;

export const SectionHeading =  styled.div`
    margin-bottom: 64px;
    @media (${breakpoints.tablet}){
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
`;

export const SectionTitle =  styled.h2`
    color: ${colors.TextPrimary};
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 32px;

    @media (${breakpoints.tablet}){
        font-size: 32px;
        margin-bottom: 0;
    }

    @media (${breakpoints.desktop}){
        font-size: 36px;
    }

    ${props => props.isCentered && `
        text-align: center;
        width: 100%;
    `}
`;






