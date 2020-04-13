
// NAV LINKS (mouseenter and mouseout)
let enterLink = document.querySelectorAll(".nav-link")

enterLink.forEach(link => {
    link.addEventListener('mouseenter', function (event) {
        event.target.style.color = 'purple';
        setTimeout(function () {
            event.target.style.color = "red";
        }, 500);
    }, false);
});

let overLink = document.querySelectorAll("a")
overLink.forEach(link => {
    link.addEventListener('mouseout', function (event) {
        event.target.style.color = 'white';
        setTimeout(function () {
            event.target.style.color = 'green';
        }, 500);
    }, false);
});

// Keydown event

addEventListener('keydown', logKey);
function logKey(key) {
    alert(`You just hit the ${key.code}`);
};



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

// Mouse Wheel Event
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    picture.style.transform = `scale(${scale})`;
}

let scale = 1;
let picture = document.querySelector('img');
picture.onwheel = zoom;


// DESTINATION EVENTS
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

