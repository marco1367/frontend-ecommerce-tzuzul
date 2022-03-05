import React from 'react'
import styled from 'styled-components';



export default function BodyPage({children, heightNavBar, heightFooter, justifyContent}) {
  return (
    <BodyPageContainer heightNavBar={heightNavBar} heightFooter={heightFooter} justifyContent={justifyContent} >
      {children}
    </BodyPageContainer>
  )
}


const BodyPageContainer = styled.div`
  width: 100%;
  min-height: ${props => `calc(100vh - ${props.heightFooter} - ${props.heightNavBar})` };
  background-color: #ededed;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 10%;
  padding-right: 10%;

  
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'start' };
  align-items: center;
  flex-direction: column;
`
