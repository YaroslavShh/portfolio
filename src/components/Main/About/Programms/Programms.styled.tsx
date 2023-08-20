import styled from "styled-components";
import {Card} from "./Card/Card.styled";
import Ph from "./Card/images/ph.png";
import Ae from "./Card/images/ae.png";
import Ai from "./Card/images/ai.png";
import Fi from "./Card/images/fi.png";

export const Prog = () => {
    return(
        <ProgStyle>
            <Card text={"Photoshop"} img={Ph}/>
            <Card text={"After Effects"} img={Ae}/>
            <Card text={"Illustrator"} img={Ai}/>
            <Card text={"Figma"} img={Fi}/>
        </ProgStyle>
    )
}

export const ProgStyle = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 55px;
  padding-right: 5%;
  display: flex;
  justify-content: flex-end;
  gap: 13px;
  align-items: center;
`