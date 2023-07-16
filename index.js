const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        
    }
    {
        type: 'checkbox',
        message: 'Whatlanguages will you use?',
        name: 'stack',
        choices: [
            'HTML', 'CSS', 'JavaScript', 'Node.js', 
        ]
    },

])