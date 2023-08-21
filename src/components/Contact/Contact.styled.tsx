import styled from "styled-components";
import {Heading2} from "../Heading/Heading2.styled";
import {Form} from "./Form/Form.styled";
import {ContactInfo} from "./ContactInfo/ContactInfo.styled";

export const Contact = (props: any) => {
    return (
        <ContactStyle>
            <Heading2 text={"Contact Us"}/>
            <FormWrapper>
                <Form/>
                <ContactInfo/>
            </FormWrapper>
        </ContactStyle>
    )
}

export const ContactStyle = styled.section`
  max-width: 1330px;
  margin: 0 auto;
  padding: 60px 15px 152px 15px;
  text-align: center;
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 130px;
  margin-top: 60px;
`