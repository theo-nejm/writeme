import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

type PropsType = {
  srcImg: string;
  templateTitle: string;
  templateDescription: string;
};

export const TemplateCard = ({
  templateTitle,
  srcImg,
  templateDescription,
}: PropsType): JSX.Element => {
  return (
    <Container className="template-wrapper">
      <h3>{templateTitle}</h3>
      <img src={srcImg} />
      <p>
        {templateDescription}
        <Link to={`/write/?template=${templateTitle}`}>
          <span>Use</span>
        </Link>
      </p>
    </Container>
  );
};
