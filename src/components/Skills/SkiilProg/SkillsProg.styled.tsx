import styled from "styled-components";


type SkillsProgPropsType = {
    text: string,
    subTitle: string
}

export const SkillsProg = (props: SkillsProgPropsType) => {
    return (
        <SkillsProgStyle>
            <div>{props.text}</div>
            <p>{props.subTitle}</p>
        </SkillsProgStyle>
    )
}

export const SkillsProgStyle = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    width: 150px;
    height: 150px;
    border: 10px solid rgba(33, 87, 242, 1);
    background: transparent;
    color: #fff;
    border-radius: 50%;
  }

  p {
    margin-top: 10px;
    color: #fff;
    opacity: 0.7;
  }
`