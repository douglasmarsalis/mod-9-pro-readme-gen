//For user input, Given as data array.
const questions = [
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
            'None', 'Installation', 'Usage', 'Credits', 'License', 'Features', 'How to Contribute', 'Tests', 'Questions'
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
        message: 'Please add Image folder and Screenshots or Video of the project (Use a relative filepath in the repo with ![alt text](assets/images/screenshot.png) syntax).',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Please list sources of collaborators, third party assets that require attribution or tutorial links.',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license (Optional).',
        choices: [
            'None', 'MIT', 'APACHE2.0', 'GPL3.0', 'BSD2', 'BSD3', 'BDS1', 'Other'
        ],
    },

    {
        type: 'input',
        name: 'features',
        message: 'If the project has many features, please list them here (Optional).',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'If you would like to contribute to the project, please vist this site for guidelines (https://www.contributor-covenant.org/). (Optional).',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please list tests and provide examples on how to run them (Optional).',
    },

    {
        type: 'input',
        name: 'userInfo1',
        message: 'What is the URL link to the DEPLOYED SITE?',
    },

    {
        type: 'input',
        name: 'userInfo2',
        message: 'What is the URL link to the Github REPOSITORY?',
    },

    {
        type: 'input',
        name: 'userInfo3',
        message: 'What is your Github USER NAME?',
    },

    {
        type: 'input',
        name: 'userInfo4',
        message: 'What is the URL link to your Github PROFILE?',
    },

    {
        type: 'input',
        name: 'userInfo5',
        message: 'What is your email address?',
    },
];

module.exports = {
    questions: questions,
};