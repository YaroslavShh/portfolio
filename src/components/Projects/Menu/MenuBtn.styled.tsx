import styled from "styled-components";
import {MyTheme} from "../../MyTheme";


type MenuBtnPropsType = {
    text: string
}
export const MenuBtn = (props: MenuBtnPropsType) => {
    return (
        <MenuBtnStyle href={"#"}>{props.text}</MenuBtnStyle>
    )
}

export const MenuBtnStyle = styled.a`
  padding: 8px 55px;
  border: 2px solid rgba(166, 188, 250, 1);
  border-radius: 68px;
  color: rgba(31, 31, 31, 1);
  background-color: #fff;
  font-size: ${MyTheme.fontSize.fourth};
  transition: 0.5s ease;
  &:hover {
    background-color: rgba(166, 188, 250, 1);
    color: #fff;
  }
`