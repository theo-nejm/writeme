/* eslint-disable */

import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ShowResult } from '../../components/ShowResult';
import { useQuery } from '../../hooks/useQuery/useQuery';
import { simplePT, templateGeneralVariables } from '../../templates/templates';
import { Container } from './styles';

export const Write = (): JSX.Element => {
  const query = useQuery("template")

  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImageAlt, setProjectImageAlt] = useState('');
  const [projectImageUrl, setProjectImageUrl] = useState('');
  const [aboutProject, setAboutProject] = useState('');
  const [projectDependencies, setProjectDependencies] = useState('');
  const [howToUse, setHowToUse] = useState('');
  const [anotherComments, setAnotherComments] = useState('');
  const [footerText, setFooterText] = useState('');
  const [templateInfo, setTemplateInfo] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const values = [projectTitle, projectDescription, projectImageAlt, projectImageUrl,
      aboutProject, projectDependencies, howToUse, anotherComments, footerText]

      const entries = Object.entries(templateGeneralVariables).map((value, index) => [value[0], values[index]]);
      const actualTemplateInfo = Object.fromEntries(entries);
      setTemplateInfo(buildTemplate(simplePT.templateParts, actualTemplateInfo));

      setIsFinished(true);
  }

  const buildTemplate = (templateParts: Record<string, string>, actualTemplateInfo: Record<string, string>) => {
    Object.keys(templateParts).forEach(part => {
      Object.keys(actualTemplateInfo).forEach((key, index) => {
        templateParts[part] = templateParts[part].replace(key, Object.values(actualTemplateInfo)[index]);
      })
    })
    return templateParts;
  }

  return (
    <>
    <Container>
      <Header />
      <div className="write-container">
        <h2>Start writing your README right now!</h2>
        <div className="write-wrapper">
          <div className="write-header">
            <h3>
              Template choosen: <span>{query}</span>
            </h3>
            <Link to="/">Change template</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="project-title">Project title</label>
            <input
              type="text"
              id="project-title"
              onChange={(ev) => setProjectTitle(ev.target.value)}
              value={projectTitle}
            />

            <label htmlFor="project-description">Project description</label>
            <textarea
              id="project-title"
              onChange={(ev) => setProjectDescription(ev.target.value)}
              value={projectDescription}
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

            <label htmlFor="another-comments">Another comments</label>
            <textarea
              id="another-comments"
              onChange={(ev) => setAnotherComments(ev.target.value)}
              value={anotherComments}
            />

            <label htmlFor="footer">Footer text</label>
            <textarea
              id="footer"
              onChange={(ev) => setFooterText(ev.target.value)}
              value={footerText}
            />

            <div className="submit-btn-wrapper">
              <button type="submit">Generate README</button>
            </div>
          </form>
        </div>
      </div>
    </Container>

    {isFinished && <ShowResult templateInfo={templateInfo} />}
    </>
  );
};
