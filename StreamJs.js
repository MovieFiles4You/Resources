//jaldi yeha se hato
// (c) lord krishna (c) biisal

/* =========================
   TMDb FEATURE REMOVED
   ========================= */
/*
async function getDets() { ... }
window.addEventListener("load", getDets())
*/

/* =========================
   ORIGINAL CODE (UNCHANGED)
   ========================= */

let homeBtn = document.querySelector(".home-btn")
let abtBtn = document.querySelector(".about-btn")
let dldBtn_outer = document.querySelector(".downloadBtn")
let file_name = document.querySelector(".file-name")
let about_nav = document.querySelector(".about-nav")
let bot_btn = document.querySelector('.bot-btn')
let contact_btn = document.querySelector('.contact-btn')
let links = document.querySelectorAll('.links a')
let bot_links = document.querySelectorAll('.bot-link a')
let chnl_link = document.querySelectorAll('.chnl-link a')
let abt_chnl = document.querySelector('.abt-chnl')
let contact = document.querySelectorAll('.contact a')
let footer = document.querySelector('footer')

let timer = 0

if (document.getElementById("heading").classList.contains("title")) {
    document.querySelector(".title").textContent = 'BISAL FILES'
}

homeBtn.classList.add('active');

abtBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"
})

homeBtn.addEventListener("click", () => {
    dldBtn_outer.style.display = "flex";
    file_name.style.display = "block";
    footer.style.display = "block";
    window.location.href = "#main";
    about_nav.style.display = "none"
})

abt_chnl.addEventListener("click", () => {
    timer = 1
    chnl_link.forEach((i) => {
        i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite `
        timer += 0.3;
    });
    timer = 0
});

function bot_btn_clicked() {
    var about_btn = document.querySelector(".about-btn")
    timer = 1;
    bot_links.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"

    document.querySelectorAll('.nryt a,.about-nav a').forEach(l => l.classList.remove('active'));
    about_btn.classList.add('active');
    document.querySelector(".wlcm").classList.add('active');
    bot_btn.classList.add('active');
};

footer_bisal_btn_clicked = () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;

    dldBtn_outer.style.display = "none";
    file_name.style.display = "none";
    footer.style.display = "none";
    about_nav.style.display = "block"
    about_nav.style.animation = "strtLoad 1s ease 0s forwards"

    document.querySelectorAll('.nryt a,.about-nav a').forEach(l => l.classList.remove('active'));
    document.querySelector(".about-btn").classList.add('active');
    document.querySelector(".wlcm").classList.add('active');
    contact_btn.classList.add('active');
}

contact_btn.addEventListener("click", () => {
    timer = 1;
    contact.forEach((i) => {
        i.style.animation = `linksBtnAn 2s ease ${timer}s infinite ,strtLoad 1s ease ${timer}s forwards`;
        timer += 0.3;
    });
    timer = 0;
})

let dldBtn = document.querySelectorAll('.downloadBtn button')
dldBtn.forEach((i) => {
    i.style.animation = `strtLoad 1s ease ${timer}s forwards, linksBtnAn 2s ease ${timer}s infinite`
    timer += 0.3;
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease  ${Math.random() * 10}s infinite`);
})

timer = 0
links.forEach((i) => {
    i.style.animation = `linksBtnAn 2s ease ${timer}s infinite`
    timer += 0.3
    i.style.setProperty("--beforestyl", `button_shine ${2 + Math.random() * 7}s ease ${Math.random() * 10}s infinite`);
})

function toggleWidth(element) {
    document.querySelectorAll('.about-nav a').forEach(l => l.classList.remove('active'));
    element.classList.add('active');
}
function toggleWidthnav(element) {
    document.querySelectorAll('.nryt a,.about-nav a').forEach(l => l.classList.remove('active'));
    element.classList.add('active');
    document.querySelector(".wlcm").classList.add('active');
}

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet");
}

var div = document.getElementById('myDiv');
var text = div.textContent;
if (text.length > 300) div.textContent = text.slice(0, 300) + "....";

const controls = [
    'play-large','rewind','play','fast-forward','progress',
    'current-time','duration','captions','settings','pip',
    'airplay','download','fullscreen'
];
document.addEventListener('DOMContentLoaded', () => {
    Plyr.setup('.player', { controls });
});

/* =========================
   EXTERNAL PLAYERS
   ONLY VLC + MX
   ========================= */

const videolink = window.location.href;
const bisallink = videolink.replace("/watch/", "/");
const videoURL = videolink.replace("/watch/", "/dl/");

function vlc_player() {
    window.location.href = `vlc://${encodeURIComponent(videoURL)}`;
}

function mx_player() {
    window.location.href =
        `intent:${encodeURIComponent(videoURL)}#Intent;package=com.mxtech.videoplayer.ad;S.title=Streaming Video;end`;
}

/* =========================
   DOWNLOAD (UNCHANGED)
   ========================= */

function bisalDownload() {
    window.location.href = bisallink;
      }
