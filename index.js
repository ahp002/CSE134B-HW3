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