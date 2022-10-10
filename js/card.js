// Variables
const Goldplayerd = JSON.parse(window.localStorage.getItem("gold_card"));
const card = document.querySelector(".card");
const back = document.querySelectorAll(".back");
const card_container = document.querySelector(".card-container");
const goldenPlayers = [];
const db = [
  ...Goldplayerd,
  {
    id: 0,
    name: "Nobody",
    Skills: 0,
    position: "None",
  },
  {
    id: 0,
    name: "Nobody",
    Skills: 0,
    position: "None",
  },
];
// end variables

// function => {

// get random function
const getRandom = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const goldenPlayer = () => {
  while (db.length) {
    const randomPlayer = db.splice(getRandom(db.length), 1);
    goldenPlayers.push(...randomPlayer);
  }
};
const addClass = (thiss) => {};
// end function }

// call functions
goldenPlayer();

// DOM manipulation
goldenPlayers.forEach((pl) => {
  const cover = document.createElement("div");
  cover.innerHTML = `
  <div class="card active ${
    pl.Skills > 0 ? "pro" : "noob"
  }" onclick="(()=> this.classList.add('choosen'))()">
  <div class="face front"></div>
  <div class="face back">
    <p class="skill">${pl.Skills}</p>
    <p class="name">${pl.name}</p>
  </div>
  </div>`;
  card_container.appendChild(cover);
});
const front = document.querySelectorAll(".front");
document.body.addEventListener("click", () => {
  const choosen = document.querySelectorAll(".choosen");
  const noob = document.querySelectorAll(".noob");
  if (choosen.length > 2) {
    front.forEach((el) => el.classList.add("card-active"));
    setTimeout(() => {
      noob[0].classList.add("gray");
      noob[1].classList.add("gray");
    }, 1100);
  }
});
var promise = document.querySelector(".mp3");
promise.play();

const backBtn = document.createElement("button");
backBtn.setAttribute("class", "backBtn");
backBtn.onclick = () => window.location.replace("../views/teams.html");
backBtn.innerText = "← Back";
document.body.appendChild(backBtn);
