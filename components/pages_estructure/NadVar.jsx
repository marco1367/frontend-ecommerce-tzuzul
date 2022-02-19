import React from 'react'
import styled from 'styled-components'


export default function NadVar({ height }) {
    return (
        <NadVarContainer height={height} ></NadVarContainer>
    )
}

const NadVarContainer = styled.div`
    width: 100%;
    height: ${props => props.height && `${props.height}`};
    background-color: black;
`