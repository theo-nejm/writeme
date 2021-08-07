import React from 'react';
import simpleTemplateImg from '../../assets/images/simple-template-readme.png';
import { Header } from '../../components/Header';
import { TemplateCard } from '../../components/TemplateCard';
import { simpleEN, simplePT } from '../../templates/templates';
import { Container } from './styles';

const templates = [simpleEN, simplePT];

export const Home = (): JSX.Element => {
  console.log(simpleEN.image);
  return (
    <Container>
      <Header />
      <div className="page-description-container">
        <h3 className="description">Choose your template to get started!</h3>
      </div>
      <div className="choose-templates">
        {templates.map(({ title, image, description }) => (
          <TemplateCard
            key={title}
            templateTitle={title}
            srcImg={image}
            templateDescription={description}
          />
        ))}

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
