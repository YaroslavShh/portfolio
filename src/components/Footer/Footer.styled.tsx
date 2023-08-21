import styled from "styled-components";


export const Footer = () => {
    return (
        <FooterStyle>
            <div>
                <p>Coded by Alireza Kavousy nezhad</p>
                <p>All Rights Reserved 2022</p>
            </div>
        </FooterStyle>
    )
}

export const FooterStyle = styled.footer`
  height: 120px;
  width: 100%;
  background-color: rgba(165, 187, 248, 1);
  padding: 60px 15px;
  div {
    max-width: 1330px;
    margin: 0 auto;
    text-align: center;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
  p:last-child {
    font-size: 12px;
  }
`