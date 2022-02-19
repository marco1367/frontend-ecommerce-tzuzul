import React from 'react'
import styled from 'styled-components';



export default function BodyPage({children, heightNavBar, heightFooter}) {
  return (
    <BodyPageContainer heightNavBar={heightNavBar} heightFooter={heightFooter} >
      {children}
    </BodyPageContainer>
  )
}


const BodyPageContainer = styled.div`
  width: 100vw;
  min-height: ${props => `calc(100vh - ${props.heightFooter} - ${props.heightNavBar})` };
  background-color: green;
  
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`
