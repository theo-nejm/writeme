import React from 'react';
import simpleTemplateImg from '../../assets/images/simple-template-readme.png';
import { Header } from '../../components/Header';
import { Container } from './styles';

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <div className="page-description-container">
        <h3 className="description">Choose your template to get started!</h3>
      </div>
      <div className="choose-templates">
        <div className="template-wrapper">
          <h3>Simple template</h3>
          <img src={simpleTemplateImg} />
          <p>
            Template description{' '}
            <span>
              <a href="#">Use</a>
            </span>
          </p>
        </div>

        <div className="template-wrapper">
          <h3>Common template</h3>
          <img src={simpleTemplateImg} />
          <p>
            Template description{' '}
            <span>
              <a href="#">Use</a>
            </span>
          </p>
        </div>

        <div className="template-wrapper">
          <h3>JS stack README template</h3>
          <img src={simpleTemplateImg} />
          <p>
            Template description{' '}
            <span>
              <a href="#">Use</a>
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
};
