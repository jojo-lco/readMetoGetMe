function generateMarkdown(answers) {
  return `
# ${answers.title}


## Description [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)

## Technologies used

${answers.technologies}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/${answers.name}/${answers.repo}/issues)

${answers.contributing} to making contributions to this project and reporting any issues.

## License

This project is licensed under ${answers.license}

## Acknowledgements
${answers.sources}

## Authors

**This project was created by:**
* ${answers.name} [![HitCount](http://hits.dwyl.com/${answers.name}/${answers.title}.svg)](http://hits.dwyl.com/${answers.name}/${answers.title})
  * Contact info: ${answers.email}
`;
}

module.exports = generateMarkdown;
