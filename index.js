let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollPage()};

function scrollPage() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollUp() {
    // safari
    document.body.scrollTop = 0;
    // every other browser
    document.documentElement.scrollTop = 0;
}
var lines = [
    "HI!",
    "MY NAME IS ALICIA PHAM",
    "A MATHEMATICS-COMPUTER SCIENCE STUDENT"
];

var typingSpeed = 130;
var lineIndex = 0;
var charIndex = 0;
var displayElement = document.getElementById("typed-text");

function typeWriterEffect() {
    if (lineIndex < lines.length) {
        let currentLine = lines[lineIndex];

        let output = "";
        for (let i = 0; i < lineIndex; i++) {
            output += lines[i] + "<br>";
        }

        output += currentLine.substring(0, charIndex + 1) + "|";

        displayElement.innerHTML = output;
        charIndex++;

        if (charIndex >= currentLine.length) {
            charIndex = 0;
            lineIndex++;
            setTimeout(typeWriterEffect, 500);
        } else {
            setTimeout(typeWriterEffect, typingSpeed);
        }
    } else {
        let finalOutput = "";
        for (let i = 0; i < lines.length; i++) {
            finalOutput += lines[i] + "<br>";
        }
        displayElement.innerHTML = finalOutput;
    }
}

typeWriterEffect();
