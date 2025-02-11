document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelectorAll(".item__visit__btn").forEach(btn => {
            btn.classList.add("rounded");
        });
    }, 1000);
});
