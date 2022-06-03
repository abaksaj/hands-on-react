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

export const Label = styled.label`
font-size: 15px;
font-family: ${colors.Primary};
height: 50px;
line-height: 50px;
font-weight: bold;
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

export const MiddleBox = styled.div`
  background-color: ${colors.middleBox};
  border-radius: 10px;
  padding: 10px;
  width: 500px;

  @media (${breakpoints.desktop}){
      margin: 200px;
  }
`;

export const ProfileContainer = styled.div`
  @media (${breakpoints.desktop}){
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
  }
`;

export const InputValues = styled.div``;

export const TextPassword = styled.h5`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 15px;
  font-family: ${colors.Primary};
  line-height: 50px;
`;

export const ButtonText = styled.h6`
  margin-top: 10px;
  margin-left: 10px;
  position: center;
  font-size: 15px;
  font-family: ${colors.Primary};
`;

export const InputFill = styled.div``;

//Api style message

export const FormSuccessMessage = styled.p`
  padding: 12px;
  font-size: 14px;
  color: #27ae60;
  text-align: center;
  background: rgba(111,207,151,0.2);
  border-radius: 8px;
  line-height: 150%;

  ${props => props.isError && `
    color: #eb5757;
    background: rgba(235,87,87,0.2);
  `}
`;





