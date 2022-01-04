import React from 'react'
import styled from 'styled-components'
import IndexKontak from './component/listKontak/IndexKontak'
import IndexAdd from './component/addKontak/IndexAdd';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`;
const Wrapper= styled.div`
    border-radius: 10px;
    background-color: teal;
    padding: 10px;
`;
const Title = styled.h1`
  font-weight: bold;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const App = () => {
  return (
    <Container>
      <Wrapper>
      <Title>Kontak App</Title>
      <br></br>
      <IndexAdd/>
      <br></br>
      <IndexKontak/>
      </Wrapper>
    </Container>
  )
}

export default App
