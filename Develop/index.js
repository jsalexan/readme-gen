// TODO: Look up the names and addresses of the other licenses. 
// TODO: Figure out how to include resource links.
// TODO: Test to see if image works.
// TODO: Look into init() requirement.

const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your full name?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'rawlist',
      name: 'license',
      message: 'Please choose your license for this application.',
      choices: ['MIT', 'Apache 2.0', 'GPL', 'GBD', 'BSD','ISC']
    },
    {
      type: 'input',
      name: 'descrWhat',
      message: 'Please describe what your application does.', 
    },
    {
      type: 'input',
      name: 'descrTech',
      message: 'What technologies did you use for this project?'
    },
    {
      type: 'input',
      name: 'descrChallenges',
      message: 'What are some of the challenges you faced?'
    },
    {
      type: 'input',
      name: 'descrFuture',
      message: 'What features would you like to add to the application in the future?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter your installation instructions.',
    },
    { 
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and/or examples so users/contributors can use the project.',
    },
    { 
      type: 'input',
      name: 'collaborators',
      message: 'Please enter information about your collaborators on this application.',
    },
    { 
      type: 'input',
      name: 'links',
      message: 'If you used any third party tutorials or links, please enter the list of links here. Please separate each link with a comma.',
    },
    { 
      type: 'input',
      name: 'contribution',
      message: 'Please enter your contribution guidelines. If you do not wish to have contributors, please say so politely.'
        },
    { 
      type: 'input',
      name: 'tests',
      message: 'Please enter any tests you have written for this application.',
    },
    { 
      type: 'input',
      name: 'GHusername',
      message: 'Please enter your GitHub username.',
    },
    { 
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
    },
    { 
      type: 'input',
      name: 'url',
      message: 'Please enter the URL for your application.',
    },
    { 
      type: 'input',
      name: 'repoName',
      message: 'Please enter the GitHub repository name for this application.',
    },
    { 
      type: 'checkbox',
      name: 'fileNames',
      message: 'Which of the following file types are included in your repository?',
      choices: [' HTML', ' CSS', ' JavaScript', ' JSON', ' README', ' Images']
    },
    { 
      type: 'input',
      name: 'imgPath',
      message: 'If you would like to add a screenshot, please enter the pathway to the image file here. Please surround the path with parentheses. Ex: (./assets/password-generator-screenshot.png)',
    },
    { 
      type: 'checkbox',
      name: 'devices',
      message: 'This application will operate on the following devices.',
      choices: [' desktop', ' tablet', ' mobile']
    },
    { 
      type: 'input',
      name: 'year',
      message: 'What is the current year?',
    },
  ])

  .then((data) => {
    const generateMarkdown = `
# ${data.title}

## [Badges](#table-of-contents)
[![License:${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
<br><br>
## Description
${data.descrWhat}
<br>
For my application, I used the following technologies: ${data.descrTech}
<br>
${data.descrChallenges}
<br>
${data.descrFuture}
<br><br>
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
<br><br>
## [Installation](#table-of-contents)
The website is hosted by GitHub pages. <br>
You can find it here: [Link to ${data.title}](${data.url}/)
<br><br>
The repository is on GitHub: [Link to GitHub repository for ${data.title}.](https://github.com/${data.GHusername}/${data.repoName}) <br>
There you will find following file types : 
${data.fileNames}
<br><br>
## [Usage](#table-of-contents)
The website (link above) was created to be used on the following devices: ${data.devices}.
![Screen capture.]${data.imgPath}
<br><br>
## [Credits](#table-of-contents) 
${data.collaborators}
<br><br>
**Third Party References and Tutorials used include:** 
<br>
> -${data.links}
<br><br>
## [License](#table-of-contents)
${data.license} Copyright ${data.year}, ${data.name}
<br><br>
## [How to Contribute](#table-of-contents)
${data.contribute
}
<br><br>
## [Tests](#table-of-contents)
${data.tests}
<br><br>
## [Questions](#table-of-contents)
If you have any questions or comments, you can contact ${data.name} at ${data.email} or visit my profile at [GitHub](https://github.com/${data.GHusername}/).
`

fs.writeFile(`${data.title}.md`, generateMarkdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
