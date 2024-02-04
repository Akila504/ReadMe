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
  }]
// {
//   type: 'input',
//   name: 'Description',
//   message: 'What is the description of the readme ?'
// },
// {
//   type: 'input',
//   name: 'Table of contents',
//   message: 'What are the table of contents ?'
// },
// {
//   type: 'input',
//   name: 'Installation',
//   message: 'How do you install Readme ?'
// },
// {
//   type: 'input',
//   name: 'Usage',
//   message: 'How do you use readme ?'
// },
// {
//   type: 'input',
//   name: 'Licence',
//   message: 'What type of licence ? '
// },
// {
//   type: 'input',
//   name: 'contributions',
//   message: 'Any contributions from elsewhere ?'
// },
// {
//   type: 'input',
//   name: 'Tests',
//   message: 'What tests have been performed'
// },
// {
//   type: 'input',
//   name: 'Gihub Username',
//   message: 'What is your github username'
// },
// {
//   type: 'input',
//   name: 'Questions',
//   message: 'What is your email adress'



const promptUser = () =>
  inquirer.prompt(questions);

const generateReadme = (data) =>
  `# ${data.Title}`;


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