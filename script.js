window.addEventListener("load", () => {
    setTimeout(() => {
        const l1 = document.getElementById("dbl11"); l1.style.transition = ".5s";
        const l2 = document.getElementById("dbl12"); l2.style.transition = ".5s";
        const l3 = document.getElementById("dbl21"); l3.style.transition = ".5s";
        const l4 = document.getElementById("dbl22"); l4.style.transition = ".5s";
        var ls = [l1, l2, l3, l4];
        
        for (let i = 1; i < 5; i = i + 2) {
            ls[i].style.opacity = 0; ls[i - 1].style.opacity = 0;
            
            var t = setTimeout(() => {
                ls[i].innerHTML = [ls[i - 1].innerHTML, ls[i - 1].innerHTML = ls[i].innerHTML][0];
                ls[i].style.opacity = 1; ls[i - 1].style.opacity = 1;
            }, 500)
        }

    }, 7000)

    
    const vidDiv = document.getElementById("vid"); 
    const vidHands = document.getElementById("vid-hands");
    const vidContainer = document.getElementById("vid-container");
    const video = document.getElementById("video");
    var vidActive = false;

    vidHands.style.marginLeft = "-1050px";
    vidDiv.addEventListener("mouseenter", (ev) => {
        if (!vidActive) {
            video.autoplay = true; video.load();
            vidActive = true;
        }
        vidHands.style.marginLeft = "0px"; 
    })

    vidContainer.addEventListener("mouseleave", (ev) => {vidHands.style.marginLeft = "-1050px";}) // sau video autoplay on mouse enter si onpause sau onend -> mouseleave
    video.addEventListener("ended", (ev) => {vidActive = false; vidHands.style.marginLeft = "-1050px";})
})


function goto(link) {
    window.location.href = link;
}