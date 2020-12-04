// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
- - - -

  ## Table of Contents
  - - - -
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
  - - - -
  ${data.description}

  ## User Story
  - - - -
  \`\`\`
  ${data.userStory}
  \`\`\`

  ## Acceptance Criteria
  - - - -
  \`\`\`
  ${data.acceptanceCriteria}
  \`\`\`

  ## Installation
  - - - -
  ${data.installation}

  ## Usage
  - - - -
  ${data.usage}

  ## License
  - - - -
  [${data.license}](https://opensource.org/licenses/${data.license})

  ## Link
  - - - -
  [Click here for Project Repo](${data.repoLink})

  ## Screenshot/Gif Demo
  - - - -
  ![DEMO Gif](${data.test})

  ## Contact
  - - - -
  If you have any question, You can contact me using my information below
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `
}

module.exports = generateMarkdown;
