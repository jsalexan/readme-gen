const fs = require('fs');

// Function that adds a license badge. If there is no license, returns an empty string.
function renderLicenseBadge(license) {
  if (license != 'none')
  return `![badge](https://img.shields.io/badge/license-${license}-blue)`
  else {
    return '';
  }
}

// Function that adds a license information link. If there is no license, returns an empty string.
function renderLicenseLink(license) {
  if (license != 'none')
  return `[Information about your ${license} license.](https://opensource.org/licenses/${license})`
  else {
    return ``;
  }
 }

// Function that adds a license category to the Table of Contents. If there is no license, returns an empty string.
function renderLicenseTOCLink(license) {
  if (license != 'none')
  return ` - [License](#license)`
  else {
    return ``;
  }
}

// Function that adds a license section to the README. If there is no license, returns an empty string.
function renderLicenseSection(data) {
  if (data.license != 'none')
  return `
  ## [License](#table-of-contents)
  **${data.license}** Copyright ${data.year}, ${data.name}<br>
  ${renderLicenseLink(data.license)}
  <br><br>
  `;
  else {
    return ``;
  }
}

// Function that adds a Badge section to the top of the README. If there is no license, returns an empty string. This could be refit if there were other types of badges used down the road.
function renderBadgeSection(data) {
  if (data.license != 'none')
  return `
  ## Badges
  ${renderLicenseBadge(data.license)}
  <br><br>
  `;
  else {
    return ``;
  }
}

// Function generates the markdown for the README.
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}

${renderBadgeSection(data)}

  ## Description
  ${data.descrGeneral}
  <br>

  For my application, I used the following technologies: ${data.descrTech}.
  <br><br>
  ${data.descrChallenges}
  <br><br>
  ${data.descrFuture}
  <br><br>

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
 ${renderLicenseTOCLink(data.license)}
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  <br><br>

  ## [Installation](#table-of-contents)
  The website is hosted by GitHub pages. <br>
  You can find it here: [${data.title}](${data.url}/)
  <br><br>
  The repository is on GitHub: [GitHub repository for ${data.title}.](https://github.com/${data.GHusername}/${data.repoName}) <br>
  There you will find following file types: 
  ${data.fileNames}.
  <br><br>
  ${data.installation} <br><br>

## [Usage](#table-of-contents)
  The website (link above) was created to be used on the following devices:<br> 
  ${data.devices}.<br><br>
  ${data.usage}<br><br>

  ![Screen capture.]${data.imgPath}
  <br><br>

  ## [Credits](#table-of-contents) 
  ${data.collaborators}
  <br><br>

  **Third Party References and Tutorials used include:** 
  <br>
  (${data.links})
  <br><br>

  ${renderLicenseSection(data)}

  ## [How to Contribute](#table-of-contents)
  ${data.contribution}
  <br><br>

  ## [Tests](#table-of-contents)
  ${data.tests}
  <br><br>

  ## [Questions](#table-of-contents)
  If you have any questions or comments, please contact <br>${data.name} at ${data.email} <br>or visit my profile at [GitHub](https://github.com/${data.GHusername}/).
  `;
}

module.exports = generateMarkdown;
