import styled from "styled-components";
import {MyTheme} from "../MyTheme";

type HeadingPropsType = {
    text: string
}

export const Heading3 = (props: HeadingPropsType) => {
    return (
        <HeadingStyle text={props.text}>{props.text}</HeadingStyle>
    )
}

export const HeadingStyle = styled.h3<HeadingPropsType>`
  font-size: ${MyTheme.fontSize.third};
  color: ${MyTheme.colors.colorBack.secondary};
  margin-bottom: 30px;
`