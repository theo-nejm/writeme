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
<div align="center">

# [PROJECT_TITLE]

[PROJECT_DESCRIPTION]
    `,
    projectImg: `
![[ALT_TEXT]]([IMG_URL])

</div>
    `,
    about: `
<div align="center">

### ❓ Sobre

</div>

[ABOUT_PROJECT]
    `,
    getingStarted: `
<div align="center">

## 📋 Pré-requisitos

### O que você precisa para começar?

</div>

[INSTALLING_DEPENDENCIES]
    `,
    howToUse: `
<div align="center">

## 📦 Como usar

</div>

[HOW_TO_USE]
    `,
    anotherComments: `
[ANOTHER_COMMENTS]
    `,
    footer: `
<div align="center">

[FOOTER_TEXT]

</div>
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
<div align="center">

# [PROJECT_TITLE]

### [PROJECT_DESCRIPTION]
    `,
    projectImg: `
![[ALT_TEXT]]([IMG_URL])

</div>
    `,
    about: `
<div align="center">

## ❓ About

</div>

[ABOUT_PROJECT]
    `,
    getingStarted: `
<div align="center">

## 📋 Getting started

### What are the project's dependencies?

</div>

[INSTALLING_DEPENDENCIES]
    `,
    howToUse: `
<div align="center">

## 📦 How to use

</div>

[HOW_TO_USE]
    `,
    anotherComments: `
[ANOTHER_COMMENTS]
    `,
    footer: `
<div align="center">

[FOOTER_TEXT]

</div>
    `,
  },
};
