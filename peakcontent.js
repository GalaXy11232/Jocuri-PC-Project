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
    if (typeof(localStorage.getItem("addAvail")) != "string") {
	localStorage.setItem("addAvail", "false");
	return;
}
    if (cond == "true") {
        document.body.style.width = "70%";
        document.getElementById("reclama").style.visibility = "visible";
        document.getElementById("reclama").play();
    }

    else if (cond == "false") {
        document.body.style.width = "auto";
        document.getElementById("reclama").style.visibility = "hidden";
        document.getElementById("reclama").pause();
    }
}
