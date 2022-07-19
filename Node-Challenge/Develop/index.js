// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    // inquirer.prompt ([
      {
        type: 'input',
        name: 'title',
        message: 'Project Title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project Description',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What packages need to be installed to run your program?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is the app used?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your license from the options below:',
        choices: ['None', 'MIT', 'Mozilla Public License 2.0'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'List all collaborators',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do you test the program',
      },
      {
        type: 'input',
        name: 'github',
        message: 'github username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'email address.',
      },
    ]

    // generateMarkdown(data);

    function init() {
        inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            // make readme string
            let createREADME = generateREADME(answers);
            console.log(createREADME);
            fs.writeFile('generatedREADME.md', createREADME, function (err) {
            console.log('success message');
            })
        });
    };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


// Function call to initialize app
init();
