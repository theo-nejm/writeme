import React from 'react';
import { Container } from './styles';

type PropsTypes = {
  templateInfo: Record<string, string>;
};

export function ShowResult({ templateInfo }: PropsTypes): JSX.Element {
  const README: string[] = [];

  Object.values(templateInfo).forEach((value) => README.push(value));
  return (
    <Container>
      <h1>Hello, world!</h1>
      <code>{README}</code>
    </Container>
  );
}
