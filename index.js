//Included packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');

//Question prompts for user input given as data arrays.
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of the project: Motivation, Why built?, What problems solved?, and What learned?',
    },

    {
        type: 'checkbox',
        name: 'tableContents',
        message: 'Please enter the table of contents (Optional).',
        choices: [
            'None', 'Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'How to Contribute', 'Tests'
        ],
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install the project? (Optional)',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please add Image folder and Screenshots of the project (Use a relative filepath in the repo with ![alt text](assets/images/screenshot.png) syntax).',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Please list collaborators, third party assets that require attribution or tutorial links.',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license (Optional).',
        choices: [
            'None', 'MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'Other'
        ],
    },

    {
        type: 'input',
        name: 'features',
        message: 'Please list any features found in the project (Optional).',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please list the guidelines on how you would like others to contribute to the project (Optional).',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please list tests and provide examples on how to run them (Optional).',
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