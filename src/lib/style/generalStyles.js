import styled from "styled-components";
import {breakpoints, colors} from "./theme";
import {Form as FormFormik, 
        Field as FieldFormik, 
        ErrorMessage as ErrorMessageFormik
      } from "formik";
import { css } from "styled-components";

export const Grid = styled.div`
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

//Register page

export const FormWrapper = styled.div`
  @media (${breakpoints.tabletSmall}){
    width: 400px;

  ${props => props.isCentered !== false && `
    margin: 0 auto;
  `}
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
  font-family: ${colors.Primary};

  &:focus {
      border-color: ${colors.TextPrimary};
  }

  @media (${breakpoints.desktop}){
      font-size: 16px;
  }
`;

export const Field = styled(FieldFormik)`
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

//  Profile page

export const SectionOut = styled.div`
  box-flex: center;
`;

export const FormikOut = styled.div`
  @media (${breakpoints.desktopLarge}){
      width: 1300px;
  }

  @media (${breakpoints.desktop}){
      width: 1024px;
  }

  @media (${breakpoints.tablet}){
      width: 768px;
  }

  @media (${breakpoints.tabletSmall}){
    width: 481px;
  } 

  @media (${breakpoints.mobileLarge}){
    width: 375px;
  } 

  ${props => props.isLeft !== false && `
    margin: 0;
  `}
`;

export const MiddleBoxOut = styled.div`
  display: block;
`;

export const MiddleBoxStyle = styled.div`
  position: absolute;
  top: 30%;
  right: 15%;
  width: 500px;
`;
export const MiddleBox = styled.div`
  background-color: ${colors.TextSecondary};
  width:30%;
  border-radius: 10px;
  padding: 10px;
  width:100%;
`;

export const InputValues = styled.div``;

export const TextPassword = styled.h5`
  margin-top: 10px;
  margin-left: 10px;
`;

export const ButtonText = styled.h6`
  margin-top: 10px;
  margin-left: 10px;
  position: center;
`;

export const InputFill = styled.div``;

export const TopRightButton = styled.div``;

export const TopRightButtonOut = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  border: 1px solid ${colors.Primary};
  border-radius: 50px;
`;



