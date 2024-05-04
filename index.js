const logoNetflix = document.querySelector('#netflix');
const logoMwb = document.querySelector('#mwb');
const logoYt = document.querySelector('#yt');
const logoYtMusic = document.querySelector('#yt-music');
const logoFs = document.querySelector('#fs');
const logoPhind = document.querySelector('#phind');

function openInNewTab(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

logoNetflix.addEventListener("click", () => {
    openInNewTab('https://www.netflix.com'); 
});

logoMwb.addEventListener("click", () => {
    openInNewTab('https://my-watching-base.sanren.fr'); 
});

logoYt.addEventListener("click", () => {
    openInNewTab('https://www.youtube.com'); 
});

logoYtMusic.addEventListener("click", () => {
    openInNewTab('https://music.youtube.com'); 
});

logoFs.addEventListener("click", () => {
    openInNewTab('https://fsurl.site'); 
});

logoPhind.addEventListener("click", () => {
    openInNewTab('https://phind.com'); 
});