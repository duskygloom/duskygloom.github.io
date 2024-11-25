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
    navlist.style.display = display === "none" || !display ? "flex" : "none";
}

function animateMarker() {
    const vh = window.outerHeight;
    const rem = parseInt(getComputedStyle(document.documentElement).fontSize);
    const cardSize = vh - 4*rem;
    const index = parseInt(window.scrollY / cardSize);
    const marker = document.getElementById('marker');
    var dots = marker.getElementsByTagName('li');
    console.log(index);
    for (var i = 0; i < dots.length; ++i) {
        dots[i].style.color = '#a5a5a5';
    }
    dots[index].style.color = 'white';
}
