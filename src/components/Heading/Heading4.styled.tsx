import {MyTheme} from "../MyTheme";
import styled from "styled-components";

type HeadingPropsType = {
    text: string
}

export const Heading4 = (props: HeadingPropsType) => {
    return (
        <HeadingStyle text={props.text}>{props.text}</HeadingStyle>
    )
}

export const HeadingStyle = styled.h4<HeadingPropsType>`
  font-size: ${MyTheme.fontSize.fourth};
`