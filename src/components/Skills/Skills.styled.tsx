import styled from "styled-components";
import {Heading2} from "../Heading/Heading2.styled";
import {SkillsProg} from "./SkiilProg/SkillsProg.styled";

export const Skills = (props: any) => {
    return (
        <SkillsStyle>
            <SkillsWrapper>
                <Heading2 text={"Learning"} color/>
                <ProgWrapper>
                    <SkillsProg text={"4.0"} subTitle={"Adobe Photoshop"}/>
                    <SkillsProg text={"4.8"} subTitle={"Microsoft Excel"}/>
                    <SkillsProg text={"4.0"} subTitle={"Adobe Photoshop"}/>
                    <SkillsProg text={"4.8"} subTitle={"Microsoft Excel"}/>
                </ProgWrapper>
            </SkillsWrapper>
        </SkillsStyle>
    )
}

export const SkillsStyle = styled.section`
  background-color: rgba(165, 187, 248, 0.7);
`

export const SkillsWrapper = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  padding: 60px 15px 152px 15px;
  text-align: center;
`

export const ProgWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`