const shirts = [
    { left: "Cruz Azul", right: "Al Hilal", img: "Cruz Azul-Al Hilal.png" },
    { left: "Liverpool", right: "Flamengo", img: "Liverpool-Flamengo.png" },
    { left: "Plymouth Argyle", right: "Flamengo", img: "Plymouth Argyle-Flamengo.png" },
    { left: "Plymouth Argyle", right: "Liverpool", img: "Plymouth Argyle-Liverpool.png" }
];

let currentShirt = 0;

function loadShirt() {
    const shirt = shirts[currentShirt];
    document.getElementById("left-shirt").src = `images/${shirt.img}`;
    document.getElementById("right-shirt").src = `images/${shirt.img}`;
    document.getElementById("left-answer").value = '';
    document.getElementById("right-answer").value = '';
    document.getElementById("result").textContent = '';
}

function checkAnswer() {
    const leftAnswer = document.getElementById("left-answer").value.trim().toLowerCase();
    const rightAnswer = document.getElementById("right-answer").value.trim().toLowerCase();
    
    const shirt = shirts[currentShirt];
    const result = document.getElementById("result");

    if (leftAnswer === shirt.left.toLowerCase() && rightAnswer === shirt.right.toLowerCase()) {
        result.textContent = "Correct! Great job!";
        currentShirt++; // Move to next shirt
        if (currentShirt < shirts.length) {
            setTimeout(loadShirt, 1000); // Load the next shirt after a short delay
        } else {
            result.textContent = "You've completed all the shirts! Game Over.";
        }
    } else {
        result.textContent = "Try again!";
    }
}

loadShirt();
