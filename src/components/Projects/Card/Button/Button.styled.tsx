import styled, {css} from "styled-components";
import {MyTheme} from "../../../MyTheme";

type ButtonPropsType = {
    backColor?: true,
    text: string,
}

export const Button = (props: ButtonPropsType) => {
    return (
        <BtnStyle text={props.text} backColor={props.backColor} href={"#"}>{props.text}</BtnStyle>
    )
}

export const BtnStyle = styled.a<ButtonPropsType>`
  border-radius: 12px;
  padding: 8px 18px;
  cursor: pointer;
  font-size: 14px;
  background-color: transparent;
  transition: 0.5s ease;
  color: ${MyTheme.colors.colorBack.primary};
  &:hover {
    color: rgba(57, 57, 57, 1);
  }
  ${props => props.backColor && css<ButtonPropsType>`
    background-color: ${MyTheme.colors.colorBack.secondary};
    color: rgba(255, 255, 255, 1);
    &:hover {
      background-color: rgba(57, 57, 57, 1);
      color: #fff;
    }
  `}
`