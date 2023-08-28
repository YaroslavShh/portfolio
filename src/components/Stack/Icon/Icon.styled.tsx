import styled from "styled-components";
import Sprite from "./sprite-icon.svg"

type IconPropsType = {
    iconId: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <IconStyle>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                 width="120px" height="120px" viewBox="0 0 512 512">
                <use xlinkHref={`${Sprite}#${props.iconId}`} />
            </svg>
        </IconStyle>
    )
}

export const IconStyle = styled.div`
  width: 120px;
  height: 120px;
`