import styled from "styled-components";
import {Heading2} from "../Heading/Heading2.styled";
import {Card} from "./Card/Card.styled";
import Img1 from "./Card/images/1.png";
import Img2 from "./Card/images/2.png";
import Img3 from "./Card/images/3.png";
import Img4 from "./Card/images/4.png";
import {MenuBtn} from "./Menu/MenuBtn.styled";


export const Projects = (props: any) => {
    return (
        <ProjStyle>
            <Heading2 text={"Projects"}/>
            <MenuWrapper>
                <MenuBtn text={"Story"}/>
                <MenuBtn text={"Post"}/>
                <MenuBtn text={"Banner"}/>
                <MenuBtn text={"Trailer"}/>
                <MenuBtn text={"Desighn"}/>
                <MenuBtn text={"More"}/>
            </MenuWrapper>
            <CardWrapper>
                <Card img={Img1} size/>
                <Card img={Img2}/>
                <Card img={Img3}/>
                <Card img={Img4}/>
                <Card img={Img1} size/>
                <Card img={Img2}/>
                <Card img={Img3}/>
                <Card img={Img4}/>
            </CardWrapper>
        </ProjStyle>
    )
}

export const ProjStyle = styled.section`
  max-width: 1330px;
  margin: 0 auto;
  padding: 60px 15px 152px 15px;
  text-align: center;
  position: relative;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 55px;
`

export const CardWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(4, 270px);
  gap: 40px;
  justify-content: center;
  grid-template-rows: 1fr 1fr;
  margin-top: 60px; 
`