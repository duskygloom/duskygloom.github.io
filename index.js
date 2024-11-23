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
    navlist.style.display = display === "none" || !display
        ? "flex"
        : "none";
}
