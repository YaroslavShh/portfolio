import styled from "styled-components";
import Foto from "./images/foto.png"
import {MyTheme} from "../../../MyTheme";
import {Button} from "./Btn/Button.styled";

export const About = () => {
    return (
        <AboutStyle>
            <Myimg>
                <img src={Foto} alt="my foto"/>
            </Myimg>
            <Text>
                <h1>I’m <span>Alireza</span> Kavousy nezjad</h1>
                <p>Draft is a revolutionary mobile app built to help you manage your business easily and save your money.</p>
                <Button bg backColor={MyTheme.colors.colorBack.secondary} text={"See more"}/>
                <Button backColor={"transparent"} text={"Resume download"}/>
            </Text>
        </AboutStyle>
    )
}

export const AboutStyle = styled.div`
  width: 100%;
  height: 507px;
  padding: 43px 104px;
  display: flex;
  gap: 150px;
  align-items: center;
  border-radius: 200px 0;
  background: linear-gradient(132deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 71, 255, 0.2) 100%);
  border: 1px solid #fff;
  backdrop-filter: blur(8px);
`

export const Myimg = styled.div`
  width: 650px;
  height: 400px;
  border-radius: 50%;
  padding: 20px;
  background-color: #fff;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    background-size: cover;
  }
`

export const Text = styled.div`
  color: ${MyTheme.colors.colorText.secondary};
    h1{
      font-size: ${MyTheme.fontSize.primary};
      line-height: 136%;
      span {
        color: ${MyTheme.colors.colorBack.secondary};
      }
    }
    p {
      margin: 19px 0 42px 0;
      font-size: ${MyTheme.fontSize.third};
    }
`