import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const Loader = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
`;

export const Puff = styled.div`
    color: ${colors.Primary};
    height: 80px;
    width: 80px;
`;



