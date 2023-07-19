//Included packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const utililities = require('util');

//Variables needed for connection of modules to the application
const generateMarkdown = require('util/generateMarkdown.js');
const licenseBadge = require('util/licenseBadge.js').licenseBadge;
const questions = require('util/questions.js').questions;

//Variable for async await
const writeFileAsync = util.promisify(fs.writeFile);

//This function will init the application and create a READme file
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        answers.licenseBadge = licenseBadge(answers.license);
        let readMeData = generateMarkdown(answers);
        await writeFileAsync('Now creating Professional READme file!', readMeData);
    }   catch (err) {
        throw err;
    }
}

//This function will call to initialize the application
init();