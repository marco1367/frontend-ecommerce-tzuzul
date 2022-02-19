import React from 'react'
import styled from 'styled-components'
//components:
import BodyPage from './BodyPage'
import NadVar from './NadVar'
import Footer from './footer'


const GeneralPageComponent = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: red;
    
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
`

export default function GeneralPage({children, heightNavBar, heightFooter}) {
  return (
    <GeneralPageComponent>
      <NadVar height={heightNavBar} ></NadVar>
      <BodyPage heightNavBar={heightNavBar} heightFooter={heightFooter} >
        {children}
      </BodyPage>
      <Footer height={heightFooter} ></Footer>
    </GeneralPageComponent>
  )
}
