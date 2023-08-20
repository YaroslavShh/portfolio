import styled, {css} from "styled-components";
import Arrow from "./Arrow.svg";
import {MyTheme} from "../../../../MyTheme";

type ButtonPropsType = {
    bg?: true,
    backColor: string,
    text: string
}
export const Button = (props: ButtonPropsType) => {
    return(
        <BtnStyle bg={props.bg} backColor={props.backColor} text={props.text}>{props.text}</BtnStyle>
    )
}

export const BtnStyle = styled.button<ButtonPropsType>`
  padding: 15px 80px 15px 35px;
  border-radius: 20px;
  font-weight: 600;
  background: ${props => props.backColor};
  font-size: 16px;
  color: ${MyTheme.colors.colorBack.primary};
  cursor: pointer;
  ${props => props.bg && css<ButtonPropsType>`
    background-color: ${props => props.backColor};
    color: #fff;
    position: relative;
    font-size: 15px;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20%;
      width: 30px;
      height: 30px;
      background: no-repeat center/80% url(${Arrow});
    }
  `}
`