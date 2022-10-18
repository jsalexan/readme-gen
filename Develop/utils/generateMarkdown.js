const fs = require('fs');

// Function that adds a license badge. If there is no license, returns an empty string.
function renderLicenseBadge(license) {
  if (license != 'none')
  return `![badge](https://img.shields.io/badge/license-${data.license}-blue)`;
  else {
    return ``;
  }
}

// Function that adds a license information link. If there is no license, returns an empty string.
function renderLicenseLink(license) {
  if (license != 'none')
  return `[${data.license}](https://opensource.org/licenses/${data.license})`;
  else {
    return ``;
  }
}

// Function that adds a license category to the Table of Contents. If there is no license, returns an empty string.
function renderLicenseTOCLink(license) {
  if (license != 'none')
  return ` - [License](#license)`;
  else {
    return ``;
  }
}

// Function that adds a license section to the README. If there is no license, returns an empty string.
function renderLicenseSection(license) {
  if (license != 'none')
  return `
  ## [License](#table-of-contents)
  ${data.license} Copyright ${data.year}, ${data.name}
  ${renderLicenseLink(date.license)};
  <br><br>
  `;
  else {
    return ``;
  }
}

// Function generates the markdown for the README.
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## [Badges](#table-of-contents)
  ${renderLicenseBadge};
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
 ${renderLicenseTOCLink}
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

  ${renderLicenseSection(data.license)}

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
