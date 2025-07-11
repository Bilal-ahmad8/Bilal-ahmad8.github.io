// Counter Animation
function animateCounter(id, endValue, duration = 2000) {
    const counter = document.getElementById(id);
    if (!counter) return;
    let startValue = 0;
    const increment = endValue / (duration / 20);

    const updateCounter = () => {
        startValue += increment;
        if (startValue >= endValue) {
            counter.textContent = endValue + "+";
        } else {
            counter.textContent = Math.floor(startValue) + "+";
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
}

// Toggle for Show More/Show Less
function toggleProjects(category) {
    const extraProjects = document.querySelector(`#${category} .extra-projects`);
    const button = document.querySelector(`#${category} .show-more-btn`);

    if (!extraProjects) return;

    if (extraProjects.style.display === "none" || extraProjects.style.display === "") {
        extraProjects.style.display = "grid";
        button.textContent = "Show Less";
    } else {
        extraProjects.style.display = "none";
        button.textContent = "Show More";
    }
}

// Auto-init on load
document.addEventListener("DOMContentLoaded", function () {
    animateCounter("project-counter", 9);
    animateCounter("experience-counter", 2.5);
});
