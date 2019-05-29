var API_LINK = "https://josephriddle.com/docletify/api/";
var TEMP_API_LINK = "http://www.mocky.io/v2/5cedcccd3000005a036e97aa";



function setSearchBy(searchBy) {
    setSesVar(SEARCH_TYPE_SES_KEY, searchBy);
    $('#searchByDropdownMenuText').html("Search By <i>" + searchBy + "</i>");
    // $('#searchInput').attr("value", "");
} 

function setSearchInput(searchTerm) {
    $('#searchInput').attr("value", "");
}


function search(event, searchedBy, searchedTerm) {
    event.preventDefault();  // prevent page from redirecting

    if(searchedBy == null || !stringsEqual(searchedBy, "Class") && !stringsEqual(searchedBy, "Constructor") && !stringsEqual(searchedBy, "Method")) {
        alert("Function: 'search(searchedBy, searchedTerm)',\nIllegalArgumentException (searchedBy = '" + searchedBy + "').\n\nContact Brian Kamp.");
        return;
    }

    if(searchedTerm == null)
        searchedTerm = "";
        
    $("#ariaMessagingDiv").html("<h4 aria-live='polite'>Searching Java API for " + searchedBy + " " + searchedTerm + "</h4>");       // aria message to tell user that searchedTerm is being searched

    //Grabbing Data
    let url = API_LINK + searchedBy;
            //delete line after Joe fixes his side

    
    var htmlTable;

    // $("#ariaMessagingDiv").html("<h4 aria-live='polite'>New search results for Class '" + searchedTerm + "'</h4>");
    // $("#searchResults").html(htmlTable);


} 