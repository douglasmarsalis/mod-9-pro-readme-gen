//Included packages needed for this application.
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

//Variables needed for connection of modules to the application
const generateMarkdown = require("./util/generateMarkdown");
const licenseBadge = require("./util/licenseBadge").licenseBadge;
const questions = require("./util/questions").questions;

//Variable for async await
const writeFileAsync = util.promisify(fs.writeFile);

//This function will init the application and create a READme file
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers.license);
        answers.licenseBadge = licenseBadge(answers.license);
        console.log(answers.licenseBadge);
        let readMeData = generateMarkdown(answers);
        await writeFileAsync("newREADME.md", readMeData);
    }   catch (err) {
        throw err;
    }
}

//This function will call to initialize the application
init();