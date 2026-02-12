/* ---- EFEKTY SPAWN (serca/gwiazdy/płatki) ---- */
let heartInterval, starInterval, petalInterval;
let stage = 0; // kontrola przesunięć magicBox

function spawn(cls, emoji) {
    const el = document.createElement("div");
    el.classList.add(cls);
    el.innerHTML = emoji;
    el.style.left = Math.random() * 95 + "vw";
    el.style.animationDuration = (3 + Math.random() * 3) + "s";
    // drobna rotacja początkowa dla różnorodności
    el.style.transform = `rotate(${Math.random()*60-30}deg)`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 7000);
}

function hearts(rate) {
    clearInterval(heartInterval);
    heartInterval = setInterval(() => spawn("heart","❤️"), rate);
}
function stars(rate) {
    clearInterval(starInterval);
    starInterval = setInterval(() => spawn("star","✨"), rate);
}
function petals(rate) {
    clearInterval(petalInterval);
    petalInterval = setInterval(() => spawn("petal","🌸"), rate);
}

/* START - dużo serc, trochę płatków */
hearts(60);
petals(180);

/* ---- ZMIANA EKRANÓW ---- */
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

function nextScreen() {
    screen1.classList.remove("active");
    screen2.classList.add("active");

    // na ekranie 2: mniej serc, włącz gwiazdy, mniej płatków
    hearts(250);
    stars(300);
    petals(350);

    // reset stage i tekstów na wypadek powrotów
    stage = 0;
    const header = document.getElementById("header2");
    const text = document.getElementById("text2");
    const btn = document.getElementById("btn2");
    header.innerText = "😳 No dobra...";
    text.style.display = "block";
    btn.innerText = "Teraz tutaj";
}

/* ---- ZABAWY Z MAGICBOX ----
   logika:
   stage 0 -> klik: przenieś top-right, ukryj paragraf, ZAMIEŃ nagłówek na krótki wierszyk z imionami (Lena/Lenka/Lencia)
   stage 1 -> klik: przenieś bottom-left, zmień tekst przycisku
   stage 2 -> klik: wróć do środka i ustaw przycisk "No dobra ale ostatnia rzecz"
   stage 3 -> klik: przejście do trzeciego ekranu
*/
function moveBox() {
    const box = document.getElementById("magicBox");
    const btn = document.getElementById("btn2");
    const text = document.getElementById("text2");
    const header = document.getElementById("header2");

    if (stage === 0) {
        // przenieś do prawego górnego rogu
        box.style.position = "fixed";
        box.style.top = "18px";
        box.style.right = "18px";
        box.style.left = "";
        box.style.bottom = "";
        // ukryj środkowy paragraf
        text.style.display = "none";

        // krótki wierszyk z imionkami (różne formy)
        header.innerText = "Lenka, Lena, Lencia —\nserduszko puka, serduszko śpiewa.";
        btn.innerText = "Żartowałem 😈";
        stage = 1;
    }
    else if (stage === 1) {
        // przenieś do lewego dolnego rogu
        box.style.top = "";
        box.style.right = "";
        box.style.bottom = "18px";
        box.style.left = "18px";
        btn.innerText = "Oho i co teraz? 😳";
        stage = 2;
    }
    else if (stage === 2) {
        // wróć do środka i przygotuj ostatnią rzecz
        box.style.position = "";
        box.style.top = "";
        box.style.right = "";
        box.style.bottom = "";
        box.style.left = "";
        btn.innerText = "No dobra ale ostatnia rzecz 😳";
        stage = 3;
    }
    else if (stage === 3) {
        // przejście do ekranu 3
        screen2.classList.remove("active");
        screen3.classList.add("active");

        // na ekranie 3: zwiększ trochę gwiazd i serc, zmiana płatków
        hearts(180);
        stars(180);
        petals(420);
    }
}
