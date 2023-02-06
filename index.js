let navbarColor = document.querySelector("#one");
let navbar = document.querySelector(".navbar-brand");
let navbarhome = document.querySelector(".nav-link");
let dropbtn = document.querySelector(".navbar-toggler");
let colorChangehangeBtn = document.querySelector(".form-check-input");
let textChangeOnSwitch = document.querySelector(".form-check-label");

// text area
let textareas = document.querySelector(".textarea");
let uppercase = document.querySelector(".uppercase");
let lowercase = document.querySelector(".lowercase");
let cleartext = document.querySelector(".cleartext");

// text summary
let wordcount = document.querySelector(".wordcount");
let charcount = document.querySelector(".charcount");

// color change start here
colorChangehangeBtn.addEventListener("click", () => {
  switchclicked();
});

function switchclicked() {
  if (navbarColor.style.backgroundColor === "black") {
    navbarColor.style.backgroundColor = "#ecf2f9";
    navbarColor.style.border = "black";
    navbar.style.color = "black";
    navbarhome.style.color = "black";
    document.body.style.backgroundColor = "white";
    textChangeOnSwitch.innerText = "Enable Dark Mode";
  } else {
    navbarColor.style.backgroundColor = "black";
    navbar.style.color = "white";
    dropbtn.style.backgroundColor = 'white'
    navbarhome.style.color = "white";
    document.body.style.backgroundColor = "#336699";
    textChangeOnSwitch.innerText = "Enable Light Mode";
  }
}
// switch color change end here

// change cases here
uppercase.addEventListener("click", () => {
  textareas.classList.remove("lower");
  textareas.classList.add("upper");
});

lowercase.addEventListener("click", () => {
  textareas.classList.remove("upper");
  textareas.classList.add("lower");
});

cleartext.addEventListener("click", () => {
  textareas.value = "";
  charcount.innerText = "Total Characters = 0 ";
  wordcount.innerHTML = "Total words = 0";
});

textareas.addEventListener("input", () => {
  wordcount.innerHTML = `Total words = ${
    textareas.value.split(" ").length - 1
  }`;
  charcount.innerText = `Total Characters = ${textareas.value.length}`;
});
