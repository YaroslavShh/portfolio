import styled from "styled-components";
import {MyTheme} from "../MyTheme";
import {Header} from "./Header/Header.styled";

export const Main = (props: any) => {
    return (
        <MainStyled>
            <Header/>
        </MainStyled>
    )
}


export const MainStyled = styled.div`
  background: linear-gradient(to right, ${MyTheme.colors.colorBack.primary} 40%, ${MyTheme.colors.colorText.third} 30%, ${MyTheme.colors.colorText.third} 30%);
  width: 100vw;
  height: 100vh;
`