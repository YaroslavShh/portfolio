import styled from "styled-components";
import {MyTheme} from "../../../../MyTheme";

type CardPropsType = {
    text: string,
    img: string
}
export const Card = (props: CardPropsType) => {
    return(
        <CardStyle text={props.text} img={props.img}>{props.text}</CardStyle>
    )
}

export const CardStyle = styled.div<CardPropsType>`
  width: 161px;
  height: 91px;
  border-radius: 24px;
  background: ${MyTheme.colors.colorBack.primary};
  position: relative;
  display: flex;
  justify-content: center;
  font-size: ${MyTheme.fontSize.third};
  color: ${MyTheme.colors.colorText.third};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
  font-weight: bold;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: -45%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 65px;
    border: 10px solid #fff;
    height: 65px;
    background: no-repeat center/100% url(${props => props.img}) ;
    border-radius: 50%;
    padding: 20px;
    
  }
`