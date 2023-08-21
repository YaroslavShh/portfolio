import styled, {css} from "styled-components";
import {MyTheme} from "../../../MyTheme";

type ButtonPropsType = {
    backColor?: true,
    text: string,
}

export const Button = (props: ButtonPropsType) => {
    return (
        <BtnStyle text={props.text} backColor={props.backColor}>{props.text}</BtnStyle>
    )
}

export const BtnStyle = styled.button<ButtonPropsType>`
  border-radius: 12px;
  padding: 8px 18px;
  cursor: pointer;
  background-color: transparent;
  color: ${MyTheme.colors.colorBack.primary};
  ${props => props.backColor && css<ButtonPropsType>`
    background-color: ${MyTheme.colors.colorBack.secondary};
    color: rgba(255, 255, 255, 1);
  `}
`