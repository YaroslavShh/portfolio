import styled from "styled-components";

type PosItemPropsType = {
    whPos: string,
    tbPos: string,
    lrPos: string,
    img: string
}
export const PosItem = (props: PosItemPropsType) => {
    return (
        <PosItemStyle whPos={props.whPos} tbPos={props.tbPos} lrPos={props.lrPos} img={props.img}>
            <img src={props.img} alt=""/>
        </PosItemStyle>
    )
}

export const PosItemStyle = styled.div<PosItemPropsType>`
  width: ${props => props.whPos};
  height: ${props => props.whPos};
  position: absolute;
  top: ${props => props.tbPos};
  left: ${props => props.lrPos};
  display: flex;
  justify-content: center;
  align-items: center;
`