import React from 'react'
import styled from 'styled-components'
import IndexKontak from './component/listKontak/IndexKontak'

const Container = styled.div``;
const Title = styled.h1``;

const App = () => {
  return (
    <Container>
      <Title>
        aplikasi kontak App
      </Title>
      <IndexKontak/>
      
    </Container>
  )
}

export default App
