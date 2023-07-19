// This function will generate a badge for the chosen license
function licenseBadge(value) {
    if (value === "None") {
        return "[![License: None](https://img.shields.io/badge/License:_None-blue)](https://shields.io/badges/static-badge)";
    }   else if (value === "MIT") {
        return "[![License: APACHE2.0](https://img.shields.io/badge/License:_MIT-orange)](https://shields.io/badges/static-badge)";
    }   else if (value === "APACHE2.0") {
        return "[![License: APACHE2.0](https://img.shields.io/badge/License:_APACHE2.0-green)](https://shields.io/badges/static-badge)";
    }   else if (value === "GPL3.0") {
        return "[![License: GPL3.0](https://img.shields.io/badge/License:_GPL3.0-purple)](https://shields.io/badges/static-badge)";
    }   else if (value === "BSD2") {
        return "[![License: BSD2](https://img.shields.io/badge/License:_BSD2-brown)](https://shields.io/badges/static-badge)";
    }   else if (value === "BSD3") {
        return "[![License: BSD3](https://img.shields.io/badge/License:_BSD3-yellow)](https://shields.io/badges/static-badge)";
    }   else if (value === "BSD4") {
        return "[![License: BSD4](https://img.shields.io/badge/License:_BSD4-red)](https://shields.io/badges/static-badge)";
    }   else {
        return "[![License: Other](https://img.shields.io/badge/License:_Other-pink)](https://shields.io/badges/static-badge)";
    }   
}
module.exports = {
    licenseBadge: licenseBadge,
};