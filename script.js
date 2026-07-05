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

console.log("JS WORKING");
