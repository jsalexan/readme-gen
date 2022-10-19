const fs = require('fs');


// Function that adds a license badge. If there is no license, returns an empty string.
function renderLicenseBadge(license) {
  if (license != 'none')
  return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  else {
    return '';
  }
}

// Function that adds a license information link. If there is no license, returns an empty string.
function renderLicenseLink(license) {
  if (license != 'none')
  return `[${license}](https://opensource.org/licenses/${license})`;
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
function renderLicenseSection(data) {
  if (data.license != 'none')
  return `
  ## [License](#table-of-contents)
  ${data.license} Copyright ${data.year}, ${data.name}
  ${renderLicenseLink(data.license)};
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

  //TODO: Test the other badge types. So far so good!
  ## [Badges](#table-of-contents)
  ${renderLicenseBadge(data.license)};
  <br><br>

  ## Description
  ${data.descrWhat}
  <br>//TODO: Update the text below to give the user further instructions.
  For my application, I used the following technologies: ${data.descrTech}
  <br>
  ${data.descrChallenges}
  <br>
  ${data.descrFuture}
  <br><br>

  //TODO: Try running this code without a license and see what happens. 
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
 ${renderLicenseTOCLink(data.license)}
  - [Badges](#badges)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  <br><br>

  ## [Installation](#table-of-contents)
  The website is hosted by GitHub pages. <br>
  You can find it here: [${data.title}](${data.url}/)
  <br><br>
  The repository is on GitHub: [GitHub repository for ${data.title}.](https://github.com/${data.GHusername}/${data.repoName}) <br>
  There you will find following file types : 
  ${data.fileNames}.
  <br><br>

  //TODO: Sigh. How do I get these list items working. I think you need some more formatting code. 
  ## [Usage](#table-of-contents)
  The website (link above) was created to be used on the following devices:<br> 
  ${data.devices}<br><br>

  ![Screen capture.]${data.imgPath}
  <br><br>

  ## [Credits](#table-of-contents) 
  ${data.collaborators}
  <br><br>//TODO: Now the 3rd party link is just a resource link. Rethink how this might present better.
  **Third Party References and Tutorials used include:** 
  <br>
  //TODO: This isn't working. Go over the code to see why.
  ![Resources](${data.links})
  <br><br>

  ${renderLicenseSection(data.license)}

  //TODO: Check on this. Did I not enter data or is it just spitting out undefined.
  ## [How to Contribute](#table-of-contents)
  ${data.contribute
  }
  <br><br>

  ## [Tests](#table-of-contents)
  ${data.tests}
  <br><br>
//TODO: Update the code to hyperlink the email address. Also re-format the Questions section so it looks better.
  ## [Questions](#table-of-contents)
  If you have any questions or comments, you can contact ${data.name} at ${data.email} or visit my profile at [GitHub](https://github.com/${data.GHusername}/).
  `;
}

module.exports = generateMarkdown;
