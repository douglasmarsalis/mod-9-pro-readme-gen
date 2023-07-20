//This function will generate the markdown inside a new READme file
function generateMarkdown(data) {
    return `

# ${data.name}

${data.title}

${data.licenseBadge}

${data.description}

---

## [Table of Contents]
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)
5. [Features](#features)
6. [How to Contribute](#contribution)
7. [Tests](#tests)
8. [User Information](#user%20information)

---

## Instalation
${data.installation}

---

## Usage
${data.usage}

---

## Credits 
${data.credits}

--- 

## License 
License for this project: ${data.license}
* If you need help on choosing a license, please visit
this website for more information: https://opensource.org/

---

## Features 
${data.features}

---

## Contribution
* To contribute to this application:
- First, create a fork for the repo.
- Second, create a personal branch (git checkout -b branchName).
- Third, commit your new branch (git commit -m "Add details").
- Fourth, push your personal branch (git push).
- Fifth, create a pull request.

* I will then review your code and make a merge.

---

## Tests
${data.tests}

---

## User Information
* Deployed site URL: ${data.userInfo1}
* Github repository URL: ${data.userInfo2}
* Github user name: ${data.userInfo3}
* Github profile URL: ${data.userInfo4}
* User email address: ${data.userInfo5}
`;
}

module.exports = generateMarkdown;