import styled from "styled-components";
import {Info} from "./Info.styled";

export const ContactInfo = (props: any) => {
    return (
        <ContactInfoStyle>
            <Info title={"Location"} subTitle={"Mashhad/Iran"} iconId={"location"}/>
            <Info title={"Phone"} subTitle={"+989150063913"} iconId={"tel"}/>
            <Info title={"Email"} subTitle={"arkn3913@gmail.com"} iconId={"email"}/>
        </ContactInfoStyle>
    )
}

export const ContactInfoStyle = styled.div`
  width: 440px;
  padding-top: 5%;
`