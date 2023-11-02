console.log("foreground start")

const torrentLink = url();
const button = buttonMake(torrentLink);

const p = document.getElementsByClassName('text-link text-footer')[0];

p.appendChild(button);
flagRemove();

function buttonMake(torrentLink) {
    const button = document.createElement('a');
    //button.target='_blank';
    button.innerText = "   YTS.MX";
    button.href = torrentLink;
    button.className= "micro-button track-event";
    return button
}

function url() {
    const bookmarbutton = document.getElementsByClassName("micro-button track-event");
    let imdblink = bookmarbutton.item(0).getAttribute("href");
    let imdbId = imdblink.substring(26, 36).replace("/","");
    let torrentLink = "https://yts.mx/browse-movies/" + imdbId;
    return torrentLink;
}

function flagRemove() {
    var flag = document.getElementsByClassName('block-flag-wrapper show-on-hover')[0];
    flag.remove();
}