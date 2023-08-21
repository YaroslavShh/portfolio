import styled from "styled-components";
import {MyTheme} from "../../MyTheme";


type MenuBtnPropsType = {
    text: string
}
export const MenuBtn = (props: MenuBtnPropsType) => {
    return (
        <MenuBtnStyle>{props.text}</MenuBtnStyle>
    )
}

export const MenuBtnStyle = styled.button`
  padding: 8px 55px;
  border: 2px solid rgba(166, 188, 250, 1);
  border-radius: 68px;
  color: rgba(31, 31, 31, 1);
  background-color: transparent;
  font-size: ${MyTheme.fontSize.fourth};
`