import React from 'react';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/globalStyles';

function App(): JSX.Element {
  return (
    <div className="container">
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
