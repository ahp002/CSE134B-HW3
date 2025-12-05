let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollTop() {
    // safari
    document.body.scrollTop = 0;
    // every other browser
    document.documentElement.scrollTop = 0;
}