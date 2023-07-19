// This function will generate a badge for the chosen license
function licenseBadge(value) {
    if (value === "None") {
        return "[![License: None](https://img.shields.io/badge/License:_None-blue)]";
    }   else if (value === "MIT") {
        return "[![License: APACHE2.0](https://img.shields.io/badge/License:_MIT-orange)](https://opensource.org/license/mit/)";
    }   else if (value === "APACHE2.0") {
        return "[![License: APACHE2.0](https://img.shields.io/badge/License:_APACHE2.0-green)](https://opensource.org/license/apache-2-0/)";
    }   else if (value === "GPL3.0") {
        return "[![License: GPL3.0](https://img.shields.io/badge/License:_GPL3.0-purple)](https://opensource.org/license/agpl-v3/)";
    }   else if (value === "BSD2") {
        return "[![License: BSD2](https://img.shields.io/badge/License:_BSD2-brown)](https://opensource.org/license/bsd-2-clause/)";
    }   else if (value === "BSD3") {
        return "[![License: BSD3](https://img.shields.io/badge/License:_BSD3-yellow)](https://opensource.org/license/bsd-3-clause/)";
    }   else {
        return "[![License: BSD1](https://img.shields.io/badge/License:_BSD1-red)](https://opensource.org/license/bsd-1-clause/)";
    }   
}
module.exports = {
    licenseBadge: licenseBadge,
};