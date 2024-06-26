window.addEventListener("load", () => {
    console.log(window.location.pathname.split('/').pop())
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

    if (window.location.pathname.split('/').pop() == "index.html") {
        const mucur = document.createElement("img"); mucur.setAttribute("id", "mcanom");

        mucur.src = "https://media.discordapp.net/attachments/1153349989586718751/1218609053148905595/image.png?ex=6658b49e&is=6657631e&hm=737686a4088855f5ef78d65e8331c7f8a2572a7bb82014d17a9df21e3b1de5ab&=&format=webp&quality=lossless";
        mucur.style.opacity = 0;

        setTimeout(() => {
            document.body.appendChild(mucur);
            setTimeout(() => {
                mucur.style.opacity = 0.6;
                setTimeout(() => {
                    mucur.style.opacity = 0;
                    setTimeout(() => {document.body.removeChild(mucur);}, 1100);
                }, 1000);
            }, 100)
        }, 9000)
    }

    if (window.location.pathname.split('/').pop() == "osu.html") {
        const osu = document.getElementById('ppy');
        const ceiasta = document.getElementById("ssh");
        
        ceiasta.style.opacity = 0; ceiasta.style.transition = "1s ease";
        osu.style.opacity = 0;

        setTimeout(() => {
            osu.style.opacity = 1;
            ceiasta.style.opacity = 1;
            setTimeout(() => {ceiasta.load(); ceiasta.play();}, 500);
        }, 2000);
    }
    
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
            setTimeout(() => {video.muted = !video.muted;}, 100);
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

var soundboard = ["1", "2", "3", "4", "0"];

document.addEventListener("keypress", (ev) => {

    if (ev.key == soundboard[0]) 
        playAudio("Audios/Vine-boom-sound-effect.mp3", 0.5, 1);

    if (ev.key == soundboard[1]) 
        playAudio("Audios/extremely-loud-incorrect-buzzer.mp3", 0.25, 2);

    if (ev.key == soundboard[2]) 
        playAudio("Audios/correct.mp3", 0.5, 3);

    if (ev.key == soundboard[3])
        playAudio("Audios/nerd.mp3", 0.5, 4);

    if (ev.key == soundboard[4])
        playAudio("Audios/fireingaura.mp3", 0.5, 5);

    if (ev.key == " ") console.log(localStorage.getItem("addAvail"));
})


function goto(link) {
    window.location.href = link;
}

function playAudio(aud, vol, audID) {
    var audio = new Audio(aud);
    audio.volume = vol;
    audio.load();
    audio.play();

    soundImage(audID);
}

function soundImage(soundID) {
    var image = document.createElement("img");
    image.width = window.innerWidth - 200; image.height = window.innerHeight;
    image.style.cssText = `
        position: absolute;
        top: ${-1 * document.body.getBoundingClientRect().top + 25 /*de ce 25 nu stiu ca altfel nu intra tot*/};
        opacity: 1;
        margin: auto;
        left: 0;
        right: 0;
        text-align: center;
    `;

    if (soundID == 1) image.src = "https://emojiisland.com/cdn/shop/products/7_large.png?v=1571606116";
    if (soundID == 2) image.src = "https://static-00.iconduck.com/assets.00/cross-mark-emoji-1019x1024-8iz17ya4.png";
    if (soundID == 3) image.src = "https://assets.streamlinehq.com/image/private/w_200,h_200,ar_1/f_auto/v1/icons/kawaii-emoji/-symbols/-symbols/u+2714-relcbqqxhecnppvjy5qw8i.png?_a=DAJFJtWIZAAC";
    if (soundID == 4) image.src = "https://static-00.iconduck.com/assets.00/nerd-face-emoji-1024x1024-ntsqgw6q.png";
    if (soundID == 5) image.src = "Images/normal.png";

    
    document.body.appendChild(image);

    let i = setInterval(() => {
        image.style.opacity = parseFloat(image.style.opacity) - 0.05;
        if (parseFloat(image.style.opacity) < 0) {
            clearInterval(i);
            document.body.removeChild(image);
        }
    }, 75)
}