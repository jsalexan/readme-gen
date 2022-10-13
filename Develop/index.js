const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
      name: 'descr-what',
      message: 'Please describe what your application does.', 
    },
    {
      type: 'input',
      name: 'descr-tech',
      message: 'What technologies did you use for this project?'
    },
    {
      type: 'input',
      name: 'descr-challenges',
      message: 'What are some of the challenges you faced?'
    },
    {
      type: 'input',
      name: 'descr-future',
      message: 'What features would you like to add to the application in the future?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter your installation instructions.',
    },
    { 
      type: 'input',
      name: 'Usage',
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
      message: 'Please enter your contribution guidelines. If you do not wish to have contributors, please skip this question.'
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
      name: 'url',
      message: 'Please enter the URL for your application.',
    },
    { 
      type: 'input',
      name: 'repo-name',
      message: 'Please enter the GitHub repository name for this application.',
    },
    { 
      type: 'checkbox',
      name: 'file-names',
      message: 'Which of the following file types are included in your repository?',
      choices: ['HTML', 'CSS', 'JavaScript', 'JSON', 'README', 'Images']
    },
    { 
      type: 'input',
      name: 'img-path',
      message: 'If you would like to add a screenshot, please enter the pathway to the image file here.',
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
