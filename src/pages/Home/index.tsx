import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <div className="page-description-container">
        <h3 className="description">Choose your template to get started!</h3>
      </div>
    </Container>
  );
};
