import styled from "styled-components";
import {Heading4} from "../../Heading/Heading4.styled";
import Sprite from "./sprite-icon.svg"

type InfoPropsType = {
    title: string,
    subTitle: string,
    iconId: string
}
export const Info = (props: InfoPropsType) => {
    return (
        <InfoStyle>
            <div className="svgCont">
                <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     stroke="#2157f2">
                    <use xlinkHref={`${Sprite}#${props.iconId}`}/>
                </svg>
            </div>
            <div className="textCont">
                <Heading4 text={props.title}/>
                <p>{props.subTitle}</p>
            </div>
        </InfoStyle>
    )
}

export const InfoStyle = styled.div`
  display: flex;
  gap: 25px;
  & + & {
    margin-top: 10px;
  }
  .textCont {
    text-align: left;
  }
  .svgCont {
    width: 38px;
    height: 38px;
  }

  p {
    color: rgba(139, 139, 139, 1);
    font-size: 12px;
  }
`