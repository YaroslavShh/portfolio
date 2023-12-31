import styled from "styled-components";
import {Heading2} from "../Heading/Heading2.styled";
import {Icon} from "./Icon/Icon.styled";


export const Stack = (props: any) => {
    return (
        <StackStyle>
            <Heading2 text={"My Tech Stack"}/>
            <StackWrapper>
                <Icon iconId ="html"/>
                <Icon iconId ="css"/>
                <Icon iconId ="js"/>
                <Icon iconId ="node"/>
                <Icon iconId ="git"/>
                <Icon iconId ="github"/>
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
  grid-template-columns: repeat(6, 120px);
  gap: 40px;
  justify-content: center;
`