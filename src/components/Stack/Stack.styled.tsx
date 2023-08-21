import styled from "styled-components";
import {Heading} from "../Heading/Heading.styled";
import {Icon} from "./Icon/Icon.styled";


export const Stack = (props: any) => {
    return (
        <StackStyle>
            <Heading text={"My Tech Stack"}/>
            <StackWrapper>
                <Icon iconId ="html"/>
                <Icon iconId ="css"/>
                <Icon iconId ="js"/>
                <Icon iconId ="react"/>
                <Icon iconId ="sass"/>
                <Icon iconId ="git"/>
                <Icon iconId ="github"/>
                <Icon iconId ="vscode"/>
            </StackWrapper>
        </StackStyle>
    )
}

export const StackStyle = styled.section`
  max-width: 1330px;
  margin: 0 auto;
  padding: 60px 15px 152px 15px;
  text-align: center;
`

export const StackWrapper = styled.div`
  display: grid;
  margin-top: 100px;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(8, 120px);
  gap: 40px;
  justify-content: center;
`