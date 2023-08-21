import styled, {css} from "styled-components";
import {Heading3} from "../../Heading/Heading3.styled";
import {Button} from "./Button/Button.styled";

type CardPropsType = {
    img: string,
    size?: true
}

export const Card = (props: CardPropsType) => {
    return (
        <CardStyle img={props.img} size={props.size}>
            <CardText>
                <Heading3 text={"Story motion for sale English cources"}/>
                    <Button text={"Edit for you"} backColor/>
                    <Button text={"see preview"}/>
            </CardText>
        </CardStyle>
    )
}

export const CardStyle = styled.div<CardPropsType>`
  width: 270px;
  height: 395px;
  border-radius: 26px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
  background: no-repeat left/120% url(${props => props.img});
  ${props => props.size && css<CardPropsType>`
    background: no-repeat center/300% url(${props => props.img});
  `}
`

export const CardText = styled.div`
  width: 100%;
  padding: 17px 20px;
  text-align: left;
  border-radius: 0 0 26px 26px;
  background-color: rgba(255, 255, 255, 1);
  button + button {
    margin-left: 10px;
  }
`