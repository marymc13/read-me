// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  
{
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?',
    validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false;
        }
      }
},  
{
    type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
     {
    type: 'input',
    name: 'installation',
    message: 'Explain the installation process. (Required)',
    validate: installationInput => {
    if (installationInput) {
      return true;
    } else {
      console.log('Explain the installation process!');
      return false;
    }
  }
},
{
    type: 'input',
    name: 'usage',
    message: 'How would this project be used?',  
},
{
    type: 'checkbox',
    name: 'licenses',
    message: 'Choose a license for your project. (Choose 1)',
    choices: ['MIT', 'ISC', 'Apache', 'GNU GPLV3']
}, 
{
    type: 'input',
    name: 'contributions',
    message: 'How can others contribute to this project?',  
},
{
    type: 'input',
    name: 'test',
    message: 'How can we test this application?',   
},
{
    type: 'input',
    name: 'repository',
    message: 'What is the name of your repository? (Required)',
    validate: repositoryInput => {
        if (repositoryInput) {
            return true;
        } else {
            console.log('Please enter your repository name!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username? (Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub Username!');
            return false;
        }
    }
},  
{
    type: 'input',
    name: 'link',
    message: 'What is your GitHub link? (Required)',
    validate: linkInput => {
        if (linkInput) {
            return true;
        } else {
            console.log('Please enter your GitHub link!');
            return false;
        }
    }
},     
{
    type: 'input',
    name: 'email',
    message: 'What is your email? (Required)',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your email!');
            return false;     
      }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        fs.writeFile('.README.md', fileName, err => {
                if (err) {
                reject (err);
                return;
            }
            
            resolve ({
                ok: true,
                message: 'Readme complete!'
            });
        });
})
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
