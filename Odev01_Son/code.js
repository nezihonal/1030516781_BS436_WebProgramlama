const cards = ["cat.jpg", "dog.jpg", "dog.jpg"  ];

let kart1;
let kart2;
let kart3;
let html1;
let html2;
let html3;
let tahminSayisi=2;

const newCard0 = () => {
    if (tahminSayisi !== 0) {
        let index1 = Math.floor(Math.random() * cards.length);
        kart1 = cards [index1];
        html1 = document.getElementById("img0").src = kart1;
        if (kart1 === "cat.jpg") {
            document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        tahminSayisi -= 1;
    } else {
        document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}, newCard1 = () => {
    if (tahminSayisi !== 0) {
        if (kart1 === "cat.jpg") {
            kart2 = "dog.jpg";
            html2 = document.getElementById("img1").src = kart2;

        } else {
            let index2 = Math.floor(Math.random() * cards.length);
            kart2 = cards [index2];
            html2 = document.getElementById("img1").src = kart2;
        }
        if (kart2 === "cat.jpg") {
        document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        tahminSayisi -= 1;
    } else {
        document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
}, newCard2 = () => {
    if (tahminSayisi !== 0) {
        if (kart1 === "cat.jpg" || kart2 === "cat.jpg") {
            kart3 = "dog.jpg";
            html3 = document.getElementById("img2").src = kart3;

        } else {
            kart3 = "cat.jpg";
            html3 = document.getElementById("img2").src = kart3;
        }
        if (kart3 === "cat.jpg") {
        document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        }
        tahminSayisi -= 1;
    } else {
        document.getElementById("alanId").innerHTML = "Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
};


