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
 ----   JSON UTILS    --------------
*/

function searchJsonForClass(jsonUrl, searchedTerm) {     //returns Html Table for Classes found

    var htmlTable = "<table class='classTable' style='width:100%'>";

    $.ajax({
        url: jsonUrl,
        data: JSON.stringify({ Email: email, HtmlFooter: htmlInfo }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (results) {
            emailStatus = emailStatus;
        },
        error: function (err) {
            emailStatus = "Error: " + err.status + " - " + err.statusText;
        }
    });


    // $.getJSON(url, function (json) {
        // $.each(json, function(index, element) {
        //     if(searchedTerm == "" || stringContains(element.name, searchedTerm)) {
        //         alert('included: ' + element.name);
        //         htmlTable += "<tr><th>Firstname</th><th>Lastname</th> <th>Age</th> </tr><tr> <td>Jill</td> <td>Smith</td>  <td>50</td> </tr> <tr> <td>Eve</td> <td>Jackson</td>  <td>94</td> </tr>";
        //         htmlToReturn +=  "<tr id='classResult" + index + "'>" +
        //                           "<th>blah</th>" + 
        //                           "<tr>blah2</tr>" +
        //                              "<td class='resultClassName'> " + element.name + " </td>" +

                
        //                             // "<td class='nr' id='sku" + sku + "'> " + sku + " </td>" +
        //                             // "<td id='description" + sku + "'> " + description + " </td>" +
        //                             // "<td id='quantity" + sku + "'> " + quantity + " </td>" +
        //                             // "<td id='unitPrice" + sku + "'> " + unitPrice + " </td>" +
        //                             "</tr>";
        //     }
        // });
    // });

    htmlTable += "</table>";

    return htmlTable;
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