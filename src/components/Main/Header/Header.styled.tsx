import styled from "styled-components";
import Logo from "./images/logo2.png";
import NightMode from "./images/moon.png";
import {MyTheme} from "../../MyTheme";


export const Header = (props: any) => {
    return (
        <HeaderStyle>
            <LinkLogo/>
            <Menu>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tech Stack</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#"><img src={NightMode} alt="night mode"/></a></li>
            </Menu>
        </HeaderStyle>
    )
}

export const HeaderStyle = styled.header`
  height: 133px;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 33px;
`
export const LinkLogo = styled.a`
  background: no-repeat center/100% url(${Logo});
  width: 100px;
  height: 100%;
`

export const Menu = styled.nav`
  display: flex;
  gap: 60px;
  align-items: center;

  li {
    list-style-type: none;
    border-bottom: 2px solid transparent;
    transition: 0.5s ease;
    &:hover {
      border-bottom: 2px solid rgba(33, 87, 242, 1);
    }

    a {
      color: ${MyTheme.colors.colorText.secondary};
      font-size: ${MyTheme.fontSize.fourth};
    }
  }
`