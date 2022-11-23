const sectBtn = document.querySelectorAll('.control');
const themeSwitch = document.querySelector('.theme-btn');

(function () {
    [...sectBtn].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });
    themeSwitch.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        themeSwitch.classList.add('pressed');
        setTimeout(function () {
            themeSwitch.classList.remove('pressed');
        }, 800);
    })
})();