//Included packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const utililities = require('util');

//Variables needed for connection of modules to the application
const badmath = require('badmath');
const badgemaker = require('badge-maker');

//Then method requires a callback arrow function. Split and Join replaces space with dash.
.then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('-')}.json`;
   
//write.File with filename and data will overwrite the entire file as a string using JSON.stringify.
//An error message will be displayed for missing or wrong data. OR a Success message will be given for completed data.
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success! Thank you for your submitted answers.')
    );
});

//Initializes app: displays message to let user know that file is being created
//Folder is created containing READme file.
/*function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Now creating Professional READme file!');
        writeToFile('./dist/READme.md', generateMarkdown({ ...responses }));
    });
}
init();*/