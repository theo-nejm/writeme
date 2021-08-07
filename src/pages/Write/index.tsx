import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Container } from './styles';

export const Write = (): JSX.Element => {
  const location = useLocation();
  const [projectTitle, setProjectTitle] = useState('');
  const [projectImageUrl, setProjectImageUrl] = useState('');
  const [projectImageAlt, setProjectImageAlt] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [aboutProject, setAboutProject] = useState('');
  const [projectDependencies, setProjectDependencies] = useState('');
  const [howToUse, setHowToUse] = useState('');

  return (
    <Container>
      <Header />
      <div className="write-container">
        <h2>Start writing your README right now!</h2>
        <div className="write-wrapper">
          <h3>Template choosen: {location.pathname.replace('/write/', '')}</h3>
          <form>
            <label htmlFor="project-title">Project title</label>
            <input
              type="text"
              id="project-title"
              onChange={(ev) => setProjectTitle(ev.target.value)}
              value={projectTitle}
            />

            <label htmlFor="project-image-url">Project image&apos;s url</label>
            <input
              type="text"
              id="project-image-url"
              onChange={(ev) => setProjectImageUrl(ev.target.value)}
              value={projectImageUrl}
            />

            <label htmlFor="project-image-alt">
              Project image&apos;s alternative text
            </label>
            <input
              type="text"
              id="project-image-alt"
              onChange={(ev) => setProjectImageAlt(ev.target.value)}
              value={projectImageAlt}
            />

            <label htmlFor="project-description">Project description</label>
            <textarea
              id="project-title"
              onChange={(ev) => setProjectDescription(ev.target.value)}
              value={projectDescription}
            />

            <label htmlFor="about-project">About the project</label>
            <textarea
              id="about-project"
              onChange={(ev) => setAboutProject(ev.target.value)}
              value={aboutProject}
            />

            <label htmlFor="project-dependencies">Project dependencies</label>
            <textarea
              id="project-dependencies"
              onChange={(ev) => setProjectDependencies(ev.target.value)}
              value={projectDependencies}
            />

            <label htmlFor="how-to-use">Project dependencies</label>
            <textarea
              id="how-to-use"
              onChange={(ev) => setHowToUse(ev.target.value)}
              value={howToUse}
            />

            <button type="submit"></button>
          </form>
        </div>
      </div>
    </Container>
  );
};
