import React from 'react';
import { Container } from './styles';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <h1>
        <b>WRITEME</b>
        <span>.md</span>
      </h1>
    </Container>
  );
};
