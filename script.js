let heartInterval;
let starInterval;

// SERDUSZKO
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

// GWIAZDA
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = "✨";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 6000);
}

// 5x WIĘCEJ SERDUSZEK
function startMegaHearts() {
    clearInterval(heartInterval);
    heartInterval = setInterval(createHeart, 60);
}

// NORMAL
function startNormalHearts() {
    clearInterval(heartInterval);
    heartInterval = setInterval(createHeart, 300);
}

// GWIAZDY
function startStars() {
    clearInterval(starInterval);
    starInterval = setInterval(createStar, 300);
}

// PRZEJŚCIE
function nextScreen() {
    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.add("active");

    startNormalHearts();
    startStars();
}

// START
startMegaHearts();
