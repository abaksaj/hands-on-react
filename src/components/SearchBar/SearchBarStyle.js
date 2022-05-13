import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const SearchContainerPosition = styled.section`

    display: flex; 
    justify-content: flex-end;
`;

export const SearchContainer  = styled.div`
    position: absolute;
    margin: 10px 10px 1px;

    @media (${breakpoints.mobileLarge}) {
            padding: 0px, 15px;
            margin-bottom: 40px;
            
        }

    @media (${breakpoints.tabletSmall}) {
            padding: 0px, 15px;
            margin-bottom: 40px;
        }
    
    @media (${breakpoints.tabletMedium}) {
            width: 400px;
            padding: 0px, 0px;
            display: inline-block;
            
        }

    @media (${breakpoints.tablet}) {
        width: 400px;
        padding: 0px, 0px;
        display: inline-block;
    }
        
    @media (${breakpoints.desktop}) {
        width: 400px;
        padding: 0px, 0px;
        display: inline-block;
        }

    @media (${breakpoints.desktopLarge}) {
        width: 400px;
        padding: 0px, 0px;
        display: inline-block;
    }
`;

export const SearchInput  = styled.input`

    @media (${breakpoints.mobileLarge}) {
            border: 1px solid;
            color: ${colors.TextSecondary};
            border-radius: 6px;
            line-height: 40px;
            outline: none;
            font-size: 14px;


        }

    @media (${breakpoints.tabletSmall}) {
            border: 1px solid;
            color: ${colors.TextSecondary};
            border-radius: 6px;
            line-height: 40px;
            outline: none;
            font-size: 14px;
        }
    
    @media (${breakpoints.tabletMedium}) {
        border: 1px solid;
        color: ${colors.TextSecondary};
        border-radius: 6px;
        line-height: 40px;
        outline: none;
        font-size: 14px
        }

    @media (${breakpoints.tablet}) {
        border: 1px solid;
        color: ${colors.TextSecondary};
        border-radius: 6px;
        line-height: 40px;
        outline: none;
        font-size: 14px;
    }

    @media (${breakpoints.desktop}) {
        border: 1px solid;
        color: ${colors.TextSecondary};
        border-radius: 6px;
        line-height: 40px;
        outline: none;
        font-size: 16px;
        }

    @media (${breakpoints.desktopLarge}) {
        border: 1px solid;
        color: ${colors.TextSecondary};
        border-radius: 6px;
        line-height: 40px;
        outline: none;
        font-size: 16px;
    }
`; 


