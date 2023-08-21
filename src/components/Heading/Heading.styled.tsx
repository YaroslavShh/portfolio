import styled from "styled-components";
import {MyTheme} from "../MyTheme";


type HeadingPropsType = {
    text: string
}

export const Heading = (props: HeadingPropsType) => {
    return (
        <HeadingStyle text={props.text}>{props.text}</HeadingStyle>
    )
}

export const HeadingStyle = styled.h2<HeadingPropsType>`
  font-size: ${MyTheme.fontSize.secondary};
  position: relative;
  padding-bottom: 10px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, rgba(166, 188, 250, 1) 0%, rgba(33, 87, 242, 1) 100%);
  }
`