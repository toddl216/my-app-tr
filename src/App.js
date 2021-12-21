import './App.css';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PageHeader } from './PageHeader.js'
import Main from './Main'

function App() {
  return (
    <Wrap className="container">
      <Main />
    </Wrap>
  );
}
  
  const Wrap = styled.div`
    margin: 0 auto;
    padding: 16px;
  `
  export default App;