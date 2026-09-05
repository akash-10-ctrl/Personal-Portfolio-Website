const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

const filterButtons = document.querySelectorAll(".project_filters button");
const projectCards = document.querySelectorAll(".project_card");

if (filterButtons.length > 0) {
    filterButtons[0].classList.add("active");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            projectCards.forEach(card => {
                const category = card.dataset.category;

                if (filter === "all" || filter === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

const v8Video = document.getElementById("v8Motion");
const v8PlayButton = document.getElementById("videoPlayButton");

if (v8Video && v8PlayButton) {

    v8PlayButton.addEventListener("click", () => {
        v8Video.play();
    });

    v8Video.addEventListener("click", () => {
        if (v8Video.paused) {
            v8Video.play();
        } else {
            v8Video.pause();
        }
    });

    v8Video.addEventListener("play", () => {
        v8PlayButton.classList.add("hidden");
    });

    v8Video.addEventListener("pause", () => {
        v8PlayButton.classList.remove("hidden");
    });

    v8Video.addEventListener("ended", () => {
        v8PlayButton.classList.remove("hidden");
    });
}