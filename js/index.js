
// NAVIGATION EVENTS
const links = document.querySelectorAll(".nav-link")

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        link.style.color = "red";
        link.style.transform = "rotate(-360deg)";
        link.style.transition = "all 1s"
        link.style.color = "brickred";
    })
    link.addEventListener("mouseout", (e) => {
        e.preventDefault();
        link.style.color = "red";
        link.style.transform = "rotate(360deg)";
        link.style.transition = "all 1s"
        link.style.color = "black";
    })
})

// LOGO EVENT
const logo = document.querySelectorAll(".logo-heading");

logo.forEach(logo => {
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "rotate(360deg)";
        logo.textContent = "TheWheelsOnTheBus"
        logo.style.color = "orchid";
        logo.style.transition = "all 1s"
    })

    logo.addEventListener("mouseout", () => {
        logo.style.transform = "rotate(-360deg)";
        logo.textContent = "GoRoundNRound"
        logo.style.color = "dodgerblue";
        logo.style.transition = "all 1s"
    })
})

// EVENTS FOR THE IMAGES
const destinations = document.querySelectorAll(".destination");

destinations.forEach(place => {
    place.addEventListener("mouseover", (e) => {
        place.style.backgroundColor = "lightblue";
        place.style.transform = "scale(1.2)";
        place.style.transition - "all 0.3s";
    })
    place.addEventListener("mouseleave", (e) => {
        place.style.backgroundColor = "lightgreen";
        place.style.transform = "scale(1.1)";
        place.style.transition = "all 0.3s";
    })
})
