// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none')
  return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'none')
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## [Badges](#table-of-contents)
  [![License:${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)]
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
  ${data.fileNames}.
  <br><br>
  ## [Usage](#table-of-contents)
  The website (link above) was created to be used on the following devices: ${data.devices}.<br>
  ![Screen capture.]${data.imgPath}
  <br><br>
  ## [Credits](#table-of-contents) 
  ${data.collaborators}
  <br><br>
  **Third Party References and Tutorials used include:** 
  <br>
  ![Resources](${data.links})
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
  `;
}

module.exports = generateMarkdown;
