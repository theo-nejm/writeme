import React from 'react';
import { Header } from '../../components/Header';
import { TemplateCard } from '../../components/TemplateCard';
import { simpleEN, simplePT } from '../../templates/templates';
import { Container } from './styles';

export const Home = (): JSX.Element => {
  const templates = [simpleEN, simplePT];
  return (
    <Container>
      <Header />
      <div className="page-description-container">
        <h3 className="description">Choose your template to get started!</h3>
      </div>
      <div className="choose-templates">
        {templates.map(({ utilInfos: { title, image, description } }) => (
          <TemplateCard
            key={title}
            templateTitle={title}
            srcImg={image}
            templateDescription={description}
          />
        ))}
      </div>
    </Container>
  );
};
