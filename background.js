function changeBackground() {
    switch (document.getElementById("background").value) {
        case "white": document.getElementById("section").style.background = "white"; document.getElementById("section").style.color = "black"; break;
        case "dark": document.getElementById("section").style.background = "#23262F"; document.getElementById("section").style.color = "white"; break;
        case "beige": document.getElementById("section").style.background = "beige"; document.getElementById("section").style.color = "black"; break;
        case "green": document.getElementById("section").style.background = "green"; document.getElementById("section").style.color = "white"; break;
    }
}