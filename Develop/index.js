const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project.', 
    },
    {
      type: 'input',
      name: 'TOC',
      message: 'Please enter your table of contents.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter your installation instructions.',
    },
    { 
      type: 'input',
      name: 'Usage',
      message: 'Please describe how users will use your project.',
    },
    { 
      type: 'input',
      name: 'contribution',
      message: 'Please enter your contribution guidelines.',
        },
    { 
      type: 'input',
      name: 'contribution',
      message: 'Please enter your contribution guidelines.',
              }
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
