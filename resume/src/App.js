import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';

import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 2rem auto;
`;

function App() {
  return (
    <Container className="App">
      <Header />
      <div>
        <Skills />
        <Experience />
      </div>
    </Container>
  );
}

export default App;
