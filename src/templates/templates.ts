import simpleTemplateImg from '../assets/images/simple-template-readme.png';

export const templateGeneralVariables = {
  '[PROJECT_TITLE]': 'title',
  '[PROJECT_DESCRIPTION]': 'description',
  '[ALT_TEXT]': 'alt',
  '[IMG_URL]': 'url',
  '[ABOUT_PROJECT]': 'about',
  '[INSTALLING_DEPENDENCIES]': 'dependencies',
  '[HOW_TO_USE]': 'use',
  '[ANOTHER_COMMENTS]': 'comments',
  '[FOOTER_TEXT]': 'text',
};

export const simplePT = {
  utilInfos: {
    title: 'simple-pt',
    image: simpleTemplateImg,
    description: 'A simple README to your project',
  },
  templateParts: {
    header: `
      # [PROJECT_TITLE]

      [PROJECT_DESCRIPTION]
    `,
    projectImg: `
      ![[ALT_TEXT]]([IMG_URL])
    `,
    about: `
      ## ❓ Sobre

      [ABOUT_PROJECT]
    `,
    getingStarted: `
      ### 📋 Pré-requisitos

      O que você precisa para começar?

      [INSTALLING_DEPENDENCIES]
    `,
    howToUse: `
      ## 📦 Como usar

      [HOW_TO_USE]
    `,
    anotherComments: `
      [ANOTHER_COMMENTS]
    `,
    footer: `
      [FOOTER_TEXT]
    `,
  },
};

export const simpleEN = {
  utilInfos: {
    title: 'simple-en',
    image: simpleTemplateImg,
    description: 'A simple README to your project',
  },
  templateParts: {
    header: `
      # [PROJECT_TITLE]

      [PROJECT_DESCRIPTION]
    `,
    projectImg: `
      ![[ALT_TEXT]]([IMG_URL])
    `,
    about: `
      ## ❓ About

      [ABOUT_PROJECT]
    `,
    getingStarted: `
      ### 📋 Getting started

      How can you get started?

      [INSTALLING_DEPENDENCIES]
    `,
    howToUse: `
      ## 📦 How to use

      [HOW_TO_USE]
    `,
    anotherComments: `
      [ANOTHER_COMMENTS]
    `,
    footer: `
      [FOOTER_TEXT]
    `,
  },
};
