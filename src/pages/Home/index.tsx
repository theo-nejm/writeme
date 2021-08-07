import React from 'react';
import simpleTemplateImg from '../../assets/images/simple-template-readme.png';
import { Header } from '../../components/Header';
import { TemplateCard } from '../../components/TemplateCard';
import { Container } from './styles';

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <div className="page-description-container">
        <h3 className="description">Choose your template to get started!</h3>
      </div>
      <div className="choose-templates">
        <TemplateCard
          templateTitle={'Simple template'}
          srcImg={simpleTemplateImg}
          templateDescription={'To give your project a good impression'}
        />
        <TemplateCard
          srcImg={simpleTemplateImg}
          templateTitle={'Common template'}
          templateDescription={'To use in casual projects'}
        />
        <TemplateCard
          srcImg={simpleTemplateImg}
          templateTitle={'JS stack README template'}
          templateDescription={'Easiest way to write a JS/TS project README'}
        />
      </div>
    </Container>
  );
};
