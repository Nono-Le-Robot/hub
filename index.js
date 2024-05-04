const logoNetflix = document.querySelector('#logo-netflix');
const logoMwb = document.querySelector('#logo-mwb');
const logoYt = document.querySelector('#logo-yt');
const logoYtMusic = document.querySelector('#logo-yt-music');
const logoFs = document.querySelector('#logo-fs');

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
