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
    const vidBar = document.getElementById("vid-bar");
    var vidActive = false;
    var vidPaused = true;

    // vidHands.style.marginLeft = "-1208px";   <-- merge greu
    vidBar.addEventListener("mouseenter", () => {
        if (!vidActive) {
            video.autoplay = true; video.load();
            video.muted = !video.muted
            vidActive = true;
            vidPaused = false;
        }
        vidBar.style.opacity = 0;
        vidHands.style.marginLeft = `-${1208 - 25 - 768 - 150}px`; // Total - vidBar - vidWidth - spatiu pentru vidHands (MAX 415 ca altfel da >0)
    })

    vidContainer.addEventListener("mouseleave", () => { if (vidPaused) {vidHands.style.marginLeft = "-1208px"; vidBar.style.opacity = 1;} }) 
    video.addEventListener("ended", () => {vidActive = false; vidHands.style.marginLeft = "-1208px"; vidBar.style.opacity = 1;})
    video.addEventListener("pause", () => {vidPaused = true;})
    video.addEventListener("play", () => {vidPaused = false;})
})

var soundboard = ["1", "2", "3"];
var audio;

document.addEventListener("keypress", (ev) => {

    if (ev.key == soundboard[0]) 
        playAudio("Audios/Vine-boom-sound-effect.mp3", 0.5);

    if (ev.key == soundboard[1]) 
        playAudio("Audios/extremely-loud-incorrect-buzzer.mp3", 0.25);

    if (ev.key == soundboard[2]) 
        playAudio("Audios/correct.mp3", 0.5);
})


function goto(link) {
    window.location.href = link;
}

function playAudio(aud, vol) {
    audio = new Audio(aud);
    audio.volume = vol;
    audio.load();
    audio.play();
}