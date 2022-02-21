import React from 'react'
import styled from 'styled-components'

export default function Footer({height}) {
  return (
    <FooterContainer height={height} ></FooterContainer>
  )
}


const FooterContainer = styled.div`
    width: 100%;
    height: ${props => props.height && `${props.height}`};
    background-color: #119360;
`;
