const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your Project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your Project?",
        name: "description"
    }
    // {
    //     type: "input",
    //     message: "What is your Installation instruction?",
    //     name:"installation"
    // },
    // {
    //     type: "input",
    //     message: "How do you use your project?",
    //     name:"usage"
    // },
    // {
    //     type: "input",
    //     message: "What is the contribution of this project?",
    //     name:"contribution"
    // },
    // {
    //     type: "input",
    //     message: "What is the User Story?",
    //     name:"userStory"
    // },
    // {
    //     type: "input",
    //     message: "What is the acceptance criteria?",
    //     name:"acceptanceCriteria"
    // },
    // {
    //     type: "input",
    //     message: "What is Test instruction? PROVIDE TEXT INSTRUCTION OR GIF OR LINK",
    //     name:"test"
    // },
    // {
    //     type: "list",
    //     message: "What is license of the application? PICK ONE OF THE LICENSE BELOW!",
    //     choices: 
    //         [
    //             "Apache License 2.0",
    //             "BSD 3-Clause",
    //             "BSD 2-Clause",
    //             "GPL",
    //             "LGPL",
    //             "MIT license",
    //             "Mozilla Public License 2.0"
    //         ],
    //     name:"license"
    // },
    // {
    //     type: "input",
    //     message: "What is your GitHub Username?",
    //     name:"github"
    // },
    // {
    //     type: "input",
    //     message: "What is your email address?",
    //     name:"email"
    // }
];

// function to write README file
function writeToFile(fileName, data) {

    // Call generateMarkdown.js to generate README templete literal
    const content = generateMarkdown(data);

    // function to generate file
    fs.writeFile(fileName, content, (err) => 

        err ? console.log(err) : console.log('README file is created!')
    );
}

// function to initialize program
function init() {

    inquirer
        .prompt(questions) // Promt the questions
        .then((response) => {
            console.log( response );

            writeToFile("TN_README.md", response) // Call writeToFile function

            // if (response.description) {
            //     console.log("Please enter your project description!");
            // }

        })

    //     try {
    //         writeToFile("REAME.md", generateMarkdown);
    //     } catch (error){
    //         console.log(error);
    //     }
}

// function call to initialize program
init();