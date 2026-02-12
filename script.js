let heartInterval, starInterval, petalInterval;
let stage = 0;

function create(el, cls, emoji, speed) {
    const e = document.createElement("div");
    e.classList.add(cls);
    e.innerHTML = emoji;
    e.style.left = Math.random() * 100 + "vw";
    e.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 7000);
}

function hearts(rate) {
    clearInterval(heartInterval);
    heartInterval = setInterval(() => create("div","heart","❤️"), rate);
}

function stars(rate) {
    clearInterval(starInterval);
    starInterval = setInterval(() => create("div","star","✨"), rate);
}

function petals(rate) {
    clearInterval(petalInterval);
    petalInterval = setInterval(() => create("div","petal","🌸"), rate);
}

/* START */
hearts(60);
petals(200);

/* ZMIANA EKRANU */
function nextScreen() {
    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.add("active");

    hearts(250);
    stars(250);
    petals(400);
}

/* ZABAWA PRZYCISKIEM */
function moveBox() {
    const box = document.getElementById("magicBox");
    const btn = box.querySelector("button");

    if (stage === 0) {
        box.style.position = "fixed";
        box.style.top = "20px";
        box.style.right = "20px";
        box.style.left = "";
        box.style.bottom = "";
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
    else {
        finalCat();
        stage = 0;
    }
}

/* ANIMOWANY KOTEK */
function finalCat() {
    const cat = document.getElementById("cat");
    cat.classList.add("active");

    setTimeout(() => {
        cat.classList.remove("active");

        const box = document.getElementById("magicBox");
        const btn = box.querySelector("button");

        box.style.position = "";
        box.style.top = "";
        box.style.right = "";
        box.style.bottom = "";
        box.style.left = "";
        btn.innerText = "Teraz tutaj";
    }, 3000);
}
