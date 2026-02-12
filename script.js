let heartInterval, starInterval, petalInterval;
let stage = 0;

function spawn(cls, emoji) {
    const el = document.createElement("div");
    el.classList.add(cls);
    el.innerHTML = emoji;
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 7000);
}

function hearts(rate) {
    clearInterval(heartInterval);
    heartInterval = setInterval(() => spawn("heart", "❤️"), rate);
}

function stars(rate) {
    clearInterval(starInterval);
    starInterval = setInterval(() => spawn("star", "✨"), rate);
}

function petals(rate) {
    clearInterval(petalInterval);
    petalInterval = setInterval(() => spawn("petal", "🌸"), rate);
}

/* START */
hearts(60);
petals(180);

/* ZMIANA EKRANU */
function nextScreen() {
    screen1.classList.remove("active");
    screen2.classList.add("active");

    hearts(250);
    stars(300);
    petals(350);
}

/* ZABAWA KWADRATEM */
function moveBox() {
    const box = document.getElementById("magicBox");
    const btn = document.getElementById("btn2");
    const text = document.getElementById("text2");

    if (stage === 0) {
        box.style.position = "fixed";
        box.style.top = "20px";
        box.style.right = "20px";
        text.style.display = "none";
        btn.innerText = "Żartowałem 😈";
        stage = 1;
    }
    else if (stage === 1) {
        box.style.top = "";
        box.style.right = "";
        box.style.bottom = "20px";
        box.style.left = "20px";
        btn.innerText = "Oho i co teraz? 😳";
        stage = 2;
    }
    else if (stage === 2) {
        finalCat();
        stage = 3;
    }
    else {
        screen2.classList.remove("active");
        screen3.classList.add("active");
    }
}

/* KOTEK */
function finalCat() {
    const cat = document.getElementById("cat");
    cat.classList.add("active");

    setTimeout(() => {
        cat.classList.remove("active");

        const box = document.getElementById("magicBox");
        const btn = document.getElementById("btn2");

        box.style.position = "";
        box.style.top = "";
        box.style.right = "";
        box.style.bottom = "";
        box.style.left = "";
        btn.innerText = "No dobra ale ostatnia rzecz 😳";
    }, 3000);
}
