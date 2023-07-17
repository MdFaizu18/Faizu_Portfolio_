var subtabLinks = document.getElementsByClassName("subtab-links");
var subtabContents = document.getElementsByClassName("subtab-contents");

function opentab(tabname){
    for (subtabLink of subtabLinks){
       subtabLink.classList.remove("active-link")
    }

    for (subtabContent of subtabContents){
        subtabContent.classList.remove("active-tab")
     }
     event.currentTarget.classList.add("active-link");
     document.getElementById(tabname).classList.add("active-tab")
}