const logoNetflix = document.querySelector("#netflix");
const logoGpt = document.querySelector("#gpt");
const logoYt = document.querySelector("#yt");
const logoYtMusic = document.querySelector("#yt-music");
const logoSpotify = document.querySelector("#spotify");
const logoFs = document.querySelector("#fs");
const logoPrime = document.querySelector("#prime");

function openInNewTab(url) {
    window.open(url, "_blank", "noopener,noreferrer");
}

logoNetflix.addEventListener("click", () => {
    openInNewTab("https://www.netflix.com");
});

logoPrime.addEventListener("click", () => {
    openInNewTab("https://www.primevideo.com/");
});

logoYt.addEventListener("click", () => {
    openInNewTab("https://www.youtube.com");
});

logoYtMusic.addEventListener("click", () => {
    openInNewTab("https://music.youtube.com");
});

logoSpotify.addEventListener("click", () => {
    openInNewTab("https://music.youtube.com");
});

logoFs.addEventListener("click", () => {
    openInNewTab("https://fsurl.site");
});

// logoGpt.addEventListener("click", () => {
//     openInNewTab("https://chatgpt.com/");
// });
