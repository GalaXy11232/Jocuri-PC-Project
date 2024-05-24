window.addEventListener("load", () => {
    addad(localStorage.getItem("addAvail"));
})

document.addEventListener("keypress", (ev) => {
    if (ev.key == "\\") {
        if (localStorage.getItem("addAvail") == "false") {
            localStorage.setItem("addAvail", "true");
            addad("true");
    }
        else if (localStorage.getItem("addAvail") == "true") {
            localStorage.setItem("addAvail", "false"); 
            addad("false");
        }
    }
})


function addad(cond) {
    if (cond == "true") {
        document.body.style.width = "70%";
    }

    else if (cond == "false") {
        document.body.style.width = "auto";
    }
}