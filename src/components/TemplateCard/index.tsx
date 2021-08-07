import React from 'react';
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
        <span>
          <a href="#">Use</a>
        </span>
      </p>
    </Container>
  );
};
