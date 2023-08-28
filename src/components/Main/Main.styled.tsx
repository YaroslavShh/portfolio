import styled from "styled-components";
import {MyTheme} from "../MyTheme";
import {Header} from "./Header/Header.styled";
import {Greeting} from "./About/Greeting.styled";

export const Main = (props: any) => {
    return (
        <MainStyled>
            <Header/>
            <Greeting/>
        </MainStyled>
    )
}


export const MainStyled = styled.section`
  background: linear-gradient(to right, ${MyTheme.colors.colorBack.primary} 40%, ${MyTheme.colors.colorText.third} 30%, ${MyTheme.colors.colorText.third} 30%);
  width: 100%;
  height: 100%;
`