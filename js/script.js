function openMenu() {
    const menu = document.getElementById("menu");
    const btn = document.querySelector(".menu-btn");

    menu.style.width = "250px";
    btn.classList.add("active");
}

function closeMenu() {
    const menu = document.getElementById("menu");
    const btn = document.querySelector(".menu-btn");

    menu.style.width = "0";
    btn.classList.remove("active");
}

document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const menuBtn = document.querySelector(".menu-btn");

    if (!menu.contains(event.target) &&
        !menuBtn.contains(event.target)) {
        closeMenu();
    }
});

