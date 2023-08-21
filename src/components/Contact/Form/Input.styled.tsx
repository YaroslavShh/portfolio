import styled from "styled-components";

type InputPropsType = {
    type: string,
    placeholder: string
}
export const Input = (props: InputPropsType) => {
    return (
            <InputStyle type={props.type} placeholder={props.placeholder}/>
    )
}

export const InputStyle = styled.input`
  background: rgb(239, 239, 239);
  border-radius: 10px;
  padding: 10px 0 10px 30px;
  width: 50%;
  &::placeholder {
    color: rgba(165, 165, 165, 1);
  }
`