import React from 'react'
import styled from 'styled-components'
import IndexKontak from './component/listKontak/IndexKontak'
import IndexAdd from './component/addKontak/IndexAdd';

const Container = styled.div``;
const Title = styled.h1``;

const App = () => {
  return (
    <Container>
      <Title>aplikasi kontak App </Title>
      <br></br>
      <IndexAdd/>
      <br></br>
      <IndexKontak/>
    </Container>
  )
}

export default App
