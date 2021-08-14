/* eslint-disable */

import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useQuery } from '../../hooks/useQuery/useQuery';
import { simpleEN, simplePT, templateGeneralVariables } from '../../templates/templates';
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
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const values = [projectTitle, projectDescription, projectImageAlt, projectImageUrl,
      aboutProject, projectDependencies, howToUse, anotherComments, footerText]

      const entries = Object.entries(templateGeneralVariables).map((value, index) => [value[0], values[index]]);
      const actualTemplateInfo = Object.fromEntries(entries);
      setTemplateInfo(buildTemplate(chooseTemplate().templateParts, actualTemplateInfo));

      setIsCopied(true);
      copyReadmeToClipboard();

      setTimeout(() => setIsCopied(false), 1500)
  }

  const buildTemplate = (templateParts: Record<string, string>, actualTemplateInfo: Record<string, string>) => {
    Object.keys(templateParts).forEach(part => {
      Object.keys(actualTemplateInfo).forEach((key, index) => {
        templateParts[part] = templateParts[part].replace(key, Object.values(actualTemplateInfo)[index]);
      })
    })
    return templateParts;
  }

  const chooseTemplate = () => {
    switch (query) {
      case "simple-pt":
        return simplePT;
      case "simple-en":
        return simpleEN;
      default:
        return simpleEN;
    }
  }

  const copyReadmeToClipboard = async () => {
    const README: string[] = [];

    Object.values(templateInfo).forEach((value) => README.push(value as string));
    const isCopied = await navigator.clipboard.writeText(README.join(''));
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
            <p>You can write any markdown syntax in this section.</p>
            <label htmlFor="project-title">Project title</label>
            <input
              type="text"
              id="project-title"
              onChange={(ev) => setProjectTitle(ev.target.value)}
              value={projectTitle}
              required
              placeholder="Write your project title: "
            />

            <label htmlFor="project-description">Project description</label>
            <textarea
              id="project-title"
              onChange={(ev) => setProjectDescription(ev.target.value)}
              value={projectDescription}
              required
              placeholder="Write your project description: "
            />

            <label htmlFor="project-image-url">Project image&apos;s url</label>
            <input
              type="text"
              id="project-image-url"
              onChange={(ev) => setProjectImageUrl(ev.target.value)}
              value={projectImageUrl}
              required
              placeholder="Put some valid url: "
            />

            <label htmlFor="project-image-alt">
              Project image&apos;s alternative text
            </label>
            <input
              type="text"
              id="project-image-alt"
              onChange={(ev) => setProjectImageAlt(ev.target.value)}
              value={projectImageAlt}
              required
              placeholder="Describe your project's image: "
            />

            <label htmlFor="about-project">About the project</label>
            <textarea
              id="about-project"
              onChange={(ev) => setAboutProject(ev.target.value)}
              value={aboutProject}
              required
              placeholder="Tell a little bit more about your project: "
            />

            <label htmlFor="project-dependencies">Project dependencies</label>
            <textarea
              id="project-dependencies"
              onChange={(ev) => setProjectDependencies(ev.target.value)}
              value={projectDependencies}
              required
              placeholder="Dependencies of your project: "
            />

            <label htmlFor="how-to-use">How to use</label>
            <textarea
              id="how-to-use"
              onChange={(ev) => setHowToUse(ev.target.value)}
              value={howToUse}
              required
              placeholder="Tell how to install/use your project: "
            />

            <label htmlFor="another-comments">Another comments</label>
            <textarea
              id="another-comments"
              onChange={(ev) => setAnotherComments(ev.target.value)}
              value={anotherComments}
              required
              placeholder="You can tell more about your project here [markdown syntax availabled]: "
            />

            <label htmlFor="footer">Footer text</label>
            <textarea
              id="footer"
              onChange={(ev) => setFooterText(ev.target.value)}
              value={footerText}
              required
              placeholder="Leave your mark here: "
            />

            <div className="submit-btn-wrapper">
              {!isCopied
                ? <button type="submit">Generate README</button>
                : <p id="success-text">copied to clipboard</p>
              }
            </div>
          </form>
        </div>
      </div>
    </Container>
    </>
  );
};
