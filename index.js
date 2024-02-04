const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
    name: 'Table of contents',
    message: 'What are the table of contents ?'
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
    type: 'input',
    name: 'Licence',
    message: 'What type of licence ? '
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
    name: 'Gihub Username',
    message: 'What is your github username'
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'What is your email adress'
  }

];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
