const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "repositoryName",
    message: "What is your repository name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is project title?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "description",
    message: "Please give project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What License do you have?",
    choices: ["MIT", "GPLv2", "Apache", "GPLv3"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are your contributing guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "Are there any tests for your project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(generateMarkdown(response));
    // console.log(response);
  });
}

// function call to initialize program
init();
