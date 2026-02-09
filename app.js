const imageContainer = document.querySelector('.image-container');
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
    x += 24;
    rotate();
});

nextBtn.addEventListener("click", () => {
    x -= 24;
    rotate();
});

function rotate() {
    imageContainer.style.transform =
        `translateZ(-500px) rotateY(${x}deg)`;
}
