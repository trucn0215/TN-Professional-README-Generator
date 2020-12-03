// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};

  ## Table of Contents
  - [Description](#Description)
  - [User Story](#User-Story)
  - [Accecptance Criteria](#Acceptance-Criteria)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Link](#Link)
  - [Screenshot/Demo](#Screenshot/Gif-Demo)
  - [Contact](#Contact)

  ## Description

  ## User Story

  ## Acceptance Criteria

  ## Installation

  ## Usage

  ## License

  ## Link

  ## Screenshot/Gif Demo

  ## Contact
  `
}

module.exports = generateMarkdown;
