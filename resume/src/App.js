import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';

import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

function App() {
  return (
    <Container className="App">
      <Header />
      <Skills />
    </Container>
  );
}

export default App;
