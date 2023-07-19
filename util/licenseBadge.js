// This function will generate a badge for the chosen license
function licenseBadge(value) {
    if (value === "None") {
        return "![License: None](https://img.shields.io/badge/License:_None-blue)";
    }   else if (value === "MIT") {
        return "![License: APACHE2.0](https://img.shields.io/badge/License:_MIT-orange)";
    }   else if (value === "APACHE2.0") {
        return "![License: APACHE2.0](https://img.shields.io/badge/License:_APACHE2.0-green)";
    }   else if (value === "GPL3.0") {
        return "![License: GPL3.0](https://img.shields.io/badge/License:_GPL3.0-purple)";
    }   else if (value === "BSD2") {
        return "![License: BSD2](https://img.shields.io/badge/License:_BSD2-brown)";
    }   else if (value === "BSD3") {
        return "![License: BSD3](https://img.shields.io/badge/License:_BSD3-yellow)";
    }   else if (value === "BSD4") {
        return "![License: BSD4](https://img.shields.io/badge/License:_BSD4-red)";
    }   else (value === "Other") {
        return "![License: Other](https://img.shields.io/badge/License:_Other-pink)";
    }   
}
module.exports = {
    licenseBadge: licenseBadge,
};