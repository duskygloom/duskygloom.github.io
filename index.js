var hobbiesData = {
    "all": [
        "IoT",
        "Bots",
        "Crawlers",
        "Websites",
        "Softwares",
        "Compilers",
    ],

    "counter": 0,
};

function hideNavlist() {
    if (window.innerWidth > 630) {
        document.getElementById('navlist').style.top = '-12rem';
    } 
}

function animateHobby() {
    var hobbySpan = document.getElementById("hobby");
    var hobbies = hobbiesData["all"];
    var counter = hobbiesData["counter"];
    hobbySpan.textContent = hobbies[counter];
    counter = (counter + 1) % hobbies.length;
    hobbiesData["counter"] = counter;
}

function toggleNavlist() {
    var navlist = document.getElementById("navlist");
    const display = navlist.style.display;
    // if (!display || display === 'none') {
    //     navlist.style.display = 'flex';
    //     navlist.style.top = '-12rem';
    // }
    console.log(display);
    const top = navlist.style.top;
    console.log(top);
    if (top === '4rem') {
        navlist.style.top = '-12rem';
    } else {
        navlist.style.top = '4rem';
    }

}

function animateMarker() {
    const vh = window.innerHeight;
    const headerSize = document.getElementById('header').clientHeight;
    const cardSize = vh - headerSize;
    const index = parseInt(Math.round(window.scrollY / cardSize));
    const marker = document.getElementById('marker');
    var dots = marker.getElementsByTagName('li');
    // console.log(`${vh} ${headerSize} ${cardSize} ${window.scrollY} ${index}`);
    for (var i = 0; i < dots.length; ++i) {
        dots[i].style.color = '#a5a5a5';
    }
    dots[index].style.color = 'white';
}
