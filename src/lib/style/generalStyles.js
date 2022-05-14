import styled from "styled-components";
import { breakpoints, colors, fonts } from "./theme";

import {Form as FormFormik, 
        Field as FieldFormik, 
        ErrorMessage as ErrorMessageFormik
      } from "formik";
import { css } from "styled-components";

export const Grid = styled.div `

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;

  @media screen and (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

 export const Form = styled(FormFormik)``;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FieldStyle = css`
    border: 1px solid ${colors.TextSecondary};
    border-radius: 6px;
    width: 100%;
    line-height: 50px;
    height: 50px;
    padding: 0 12px;
    outline: none;
    font-size: 14px;
    font-family: ${fonts.Primary};

    &:focus {
        border-color: ${colors.TextPrimary};
    }

    @media (${breakpoints.desktop}){
        font-size: 16px;
    }
`;

export const Field = (FieldFormik)`
  ${FieldStyle}
`;

export const Select = styled.select`
  ${FieldStyle}
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.Primary};
  padding-top: 8px;
`;


