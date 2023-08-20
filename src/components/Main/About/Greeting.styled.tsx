import styled from "styled-components";
import Plus from "./PosItem/images/plus.png";
import Ellipse from "./PosItem/images/ellipse.png";
import {PosItem} from "./PosItem/PosItem.styled";
import {About} from "./Greeting/About.styled";
import {Prog} from "./Programms/Programms.styled";

export const Greeting = () => {
    return(
        <GreetingStyle>
            <PosItem img={Plus} whPos={"88px"} lrPos={"45%"} tbPos={"0%"}/>
            <PosItem img={Ellipse} whPos={"152px"} lrPos={"75%"} tbPos={"55%"}/>
            <About/>
            <Prog/>
        </GreetingStyle>
    )
}

export const GreetingStyle = styled.div`
  padding: 50px 15% 50px 15%;
  position: relative;
  height: 85vh;
`