const path = require('path');
const util = require('util');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

const writeToFile = util.promisify(fs.writeFile)

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of the readme ? '
  },
  {
    type: 'input',
    name: 'Description',
    message: 'What is the description of the readme ?'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'How do you install Readme ?'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'How do you use readme ?'
  },
  {
    type: 'rawlist',
    name: 'Licence',
    message: 'What type of licence ? ',
    choices: ['MIT', 'IPL', 'ODbL']
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Any contributions from elsewhere ?'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'What tests have been performed'
  },
  {
    type: 'input',
    name: 'Username',
    message: 'What is your github username'
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'What is your email adress'
  }
]



const promptUser = () =>
  inquirer.prompt(questions);

const generateReadme = (data) =>
  `# ${data.Title}  
   ## Description 
   ![LICENSE](assets/${data.Licence}.svg) 

   ${data.Description} 
   ## Table of contents 
   [Installation](#installation) 

   [Usage](#usage) 

   [Licence](#licence) 

   [Contributions](#contributions) 

   [Tests](#tests) 
   
   [Questions](#questions) 

   ## Installation 
   ${data.Installation}  
   ## Usage 
   ${data.usage}  
   ## Licence 
   ${data.Licence}  
   ## Contributions 
   ${data.contributions} 
   ## Tests 
   ${data.Tests} 
   ## Questions 
   if there is any questions please reach out to me at  
    ${data.Username} or ${data.Questions}`
  ;


// function to write README file
promptUser().
  then((data) => writeToFile('myREADME.md', generateReadme(data))).
  then(() => console.log(`sucess`)).
  catch((err) => console.log(err))



// console.log(questions.title)
// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init()