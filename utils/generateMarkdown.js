// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge =license => {
  if (license === 'MIT')  {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
  } else if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else {
    return 'no license';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === 'MIT')  {
  return `(https://opensource.org/licenses/MIT)`;
} else if (license === 'ISC') {
  return `(https://opensource.org/licenses/ISC)`;
} else if (license === 'Apache 2.0') {
  return `(https://opensource.org/licenses/Apache-2.0)`;
} else if (license === 'GNU GPLv3') {
  return `(https://www.gnu.org/licenses/gpl-3.0)`
} else {
   return 'no license';
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === 'MIT')  {
    return `[MIT License] (https://choosealicense.com/mit/)`;
} else if (license === 'ISC') {
  return `[ISC License] (https://choosealicense.com/isc/)`;
} else if (license === 'Apache 2.0') {
  return `[Apache 2.0 License] (https://choosealicense.com/apache-2.0/)`;
} else if (license === 'GNU GPLv3') {
  return `[GNU GPLv3 License] (https://choosealicense.com/gpl-3.0/)`;
} else {
  return 'no license';
}
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
${renderLicenseBadge(data.licenses[0])}

## Project Name:
${data.project}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Test](#test)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${renderLicenseSection(data.licenses[0])}

## Contributions:
${data.contributions}

## Test:
${data.test}

## Repository:
${data.repository}

## Github Username:
${data.github}

## Github Link:
${data.link}

## Email:
${data.email}

Copyright ${new Date().getFullYear()} by ${data.github}
`;
}

module.exports = generateMarkdown;
