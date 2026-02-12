let heartInterval;

// SERDUSZKA
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

// 3x WIĘCEJ SERDUSZEK
function startManyHearts() {
    clearInterval(heartInterval);
    heartInterval = setInterval(createHeart, 100);
}

// NORMALNA ILOŚĆ
function startNormalHearts() {
    clearInterval(heartInterval);
    heartInterval = setInterval(createHeart, 300);
}

// PRZEJŚCIE MIĘDZY EKRANAMI
function nextScreen() {
    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.add("active");
    startNormalHearts();
}

// START
startManyHearts();
