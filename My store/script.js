const hamburger = document.querySelector ("#hamburger");
const unOrdered = document.querySelector ("#unOrdered");

hamburger.addEventListener("click", () => {
    unOrdered.classList.toogle(active);
})