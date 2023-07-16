//Included packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');

//Question prompts for user input given as data arrays.
inquirer.prompt([
    {
        type: 'input',
        name: 'Name',
        message: 'What is your name?',
    },

    {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'Languages',
        choices: [
            'HTML', 'CSS', 'JavaScript', 'Node.js'
        ],
    },

    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project?',
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a short description of the project: Motivation, Why built?, What problems solved?, and What learned?',
    },

    {
        type: 'checkbox',
        name: 'Table of Contents',
        message: 'Please enter the table of contents (Optional).',
        choices: [
            'None', 'Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'How to Contribute', 'Tests'
        ],
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'What steps are required to install the project?',
    },
])
//Then method requires a callback arrow function. Split and Join replaces space with dash.
.then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('-')}.json`;
   
//write.File with filename and data will overwrite the entire file as a string using JSON.stringify.
//An error message will be displayed for missing or wrong data. OR a Success message will be given for completed data.
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success! Thank you for your submitted answers.')
    );
});