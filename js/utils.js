/*
 ----   SESSION MANIPULATION    --------------
*/

function getSesVar(sesVar) {
    if (!sessionStorage.getItem(sesVar))
        sessionStorage.setItem(sesVar, "");

    return sessionStorage.getItem(sesVar);
}

function setSesVar(sesVar, varVal) {
    sessionStorage.setItem(sesVar, varVal);
}


/*
 ----   STRING UTILS    --------------
*/

function stringsEqual(string1, string2) {      //return boolean
    return string1.toUpperCase() === string2.toUpperCase()  ?  true:false;
}

function stringContains(stringToSearch, searchedString) {      //return boolean
    return stringToSearch.toUpperCase().includes(searchedString.toUpperCase())  ?  true:false;
}