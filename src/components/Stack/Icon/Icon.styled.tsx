import styled from "styled-components";
import Sprite from "./sprite-icon.svg"

type IconPropsType = {
    iconId: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <IconStyle>
            <svg>
                <use xlinkHref={`${Sprite}#${props.iconId}`} />
            </svg>
        </IconStyle>
    )
}

export const IconStyle = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid red;
`