const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const letterBtn = document.getElementById("letterBtn");
const galleryBtn = document.getElementById("galleryBtn");
const finalBtn=document.getElementById("finalBtn");
const screen5=document.getElementById("screen5");
const screen6=document.getElementById("screen6");
const secretPaw=document.getElementById("secretPaw");
const secretMessage=document.getElementById("secretMessage");

let pawClicks=0;

const welcome = document.getElementById("welcome");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

const giftBox = document.getElementById("giftBox");
const birthdayText = document.getElementById("birthdayText");

const letter = document.getElementById("letter");

const message =
`Dear Deepak,


You probably don't know me as well as I know you, but that's okay. I just wanted to wish you a day filled with smiles and a year filled with dreams coming true. Stay happy... someone out there is always wishing the best for you ❤️✨

Happy Birthday deepak! 🎉
 

 With warm wishes,
Your Secret Admirer
prasunna❤️`;


// Screen 1 → Screen 2
startBtn.onclick = function(){
    welcome.style.display = "none";
    screen2.style.display = "flex";
}

// Screen 2 → Screen 3
nextBtn.onclick = function(){
    screen2.style.display = "none";
    screen3.style.display = "flex";
}

// Open Gift
giftBox.onclick = function(){

    giftBox.innerHTML = "🎊";

    birthdayText.style.display = "block";

    letterBtn.style.display = "inline-block";

    createConfetti();

}

// Go to Letter Screen
letterBtn.onclick = function(){

    screen3.style.display = "none";

    screen4.style.display = "flex";

    typeWriter();

}

// Typewriter Effect
let i = 0;

function typeWriter(){

    if(i < message.length){

        letter.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }
    else{

        galleryBtn.style.display = "inline-block";
galleryBtn.onclick=function(){

    screen4.style.display="none";

    screen5.style.display="flex";

}

finalBtn.onclick=function(){

    screen5.style.display="none";

    screen6.style.display="flex";

    createConfetti();
}


    }

}

// Confetti
function createConfetti(){

    for(let i=0;i<80;i++){

        let confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.innerHTML=["🎊","✨","❤️","🎉"][Math.floor(Math.random()*4)];

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDelay=Math.random()*2+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },4000);

    }

}
secretPaw.onclick=function(){

    pawClicks++;

    if(pawClicks==5){

        secretMessage.style.display="block";

    }

}