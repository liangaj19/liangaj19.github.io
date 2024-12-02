var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("about-list");

function opentab(tabname, element) {
    // Remove active-link class from all tab links
    for (var tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    
    // Remove active-tab class from all tab contents
    for (var tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    
    // Add active-link class to the clicked tab
    element.classList.add("active-link");
    
    // Add active-tab class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}