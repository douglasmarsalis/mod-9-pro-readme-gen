//This function will generate the markdown inside the READme file
function generateMarkdown(data) {
    return `

    # ${data.name}

      ${data.title}

      ${data.licenseBadge}

      ${data.description}

---

    ## [Table of Contents](#tableContents)
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [Credits](#credits)
    4. [License](#license)
    5. [Features](#features)
    6. [How to Contribute](#contribution)
    7. [Tests](#tests)
    8. [User Information](#user-info)

---

    ## Instalation (How to get the environment running)
    ${data.installation}
    
---

    ## Usage (Screenshots and Videos)
    ${data.usage}

---

    ## Credits (Sources)
    ${data.credits}

--- 

    ## License 
    License for this project: ${data.license}
    * If you need help on choosing a license, please visit
    this website for more information: https://choosealicense.com/

---

    ## Features 
    ${data.features}

---

    ## Contribution
    * To contribute to this application, 

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