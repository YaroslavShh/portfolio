import styled from "styled-components";
import {Input} from "./Input.styled";
import {MyTheme} from "../../MyTheme";


export const Form = (props: any) => {
    return (
        <FormStyle>
            <p>Get in Touch</p>
            <InputWrapper>
                <Input type={"text"} placeholder={"E-mail"}/>
                <Input type={"tel"} placeholder={"Phone"}/>
            </InputWrapper>
            <textarea placeholder={"Message"}></textarea>
            <input type={"submit"} className={"submit"} value={"Send"}/>
        </FormStyle>
    )
}

export const FormStyle = styled.form`
  width: 490px;
  text-align: left;
  p {
    font-size: 36px;
    font-weight: bold;
  }
  textarea {
    width: 100%;
    height: 150px;
    resize: none;
    background: rgb(239, 239, 239);
    border-radius: 10px;
    padding: 10px 0 10px 30px;
    &::placeholder {
      color: rgba(165, 165, 165, 1);
    }
  }
  .submit {
    background-color: ${MyTheme.colors.colorBack.secondary};
    padding: 10px 40px;
    border-radius: 10px;
    color: #fff;
    margin-top: 20px;
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 10px 0;
`