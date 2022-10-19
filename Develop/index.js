// TODO: Look up the names and addresses of the other licenses. 
// TODO: Figure out how to include resource links.



const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
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
      choices: ['MIT', 'Apache_2.0', 'GPL_v2', 'BSD_3', 'ISC', 'none']
    },
    {
      type: 'input',
      name: 'descrWhat',
      message: 'Please describe what your application does.', 
    },
    {
      type: 'input',
      name: 'descrTech',
      message: 'Please list the various technologies used in creating your application.'
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
      message: 'If you used any third party tutorials or links, please enter the list of links here.',
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
      message: 'If you would like to add a screenshot, please follow these instructions. You can create a link to a URL image by opening an issue in GitHub and then dragging/dropping an image in it. Use the code it creates, including parentheses, as the input here. Ex:(https://user-images.githubusercontent.com/110498167/195725023-dd3ff021-8f78-43c8-a087-9e48bb705d01.png)',
    },
    { 
      type: 'checkbox',
      name: 'devices',
      message: 'This application will operate on the following devices.',
      choices: ['- desktop', '- tablet', '- mobile']
    },
    { 
      type: 'input',
      name: 'year',
      message: 'What is the current year?',
    },
  ];

function writeToFile(data) {
    fs.writeFile(`./dist/myREADME.md`, data, 
    (err) => err ? console.error(err) : console.log(`Success! Your README file is ready!`))
};

const init = () => {
  return inquirer.prompt(questions);
};  

init()
.then(data => {
    return generateMarkdown(data);
})
.then(readmeData => {
    return writeToFile(readmeData);
})
.catch(err => {
    console.log(err);
});

