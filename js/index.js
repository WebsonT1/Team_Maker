localStorage.clear();
const option = document.getElementById("team-select");
//  db
const db = [
  { id: 1, name: "Makhdi", Skills: 96, Positions: "mid-player" },
  { id: 19, name: "Sardor", Skills: 91, Positions: "mid-player" },
  { id: 21, name: "Ramzbek", Skills: 95, Positions: "mid-player" },
  { id: 20, name: "Izzat", Skills: 95, Positions: "mid-player" },
  { id: 2, name: "Abubakr", Skills: 75, Positions: "attacker" },
  { id: 3, name: "Abdulbosit", Skills: 75, Positions: "defender" },
  { id: 4, name: "Kozim", Skills: 75, Positions: "unknown" },
  { id: 5, name: "Jasur", Skills: 82, Positions: "defender" },
  { id: 6, name: "Abdulaziz-ib", Skills: 84, Positions: "goalkeeper" },
  { id: 7, name: "Abdulaziz-IB", Skills: 75, Positions: "attacker" },
  { id: 8, name: "Sirojiddin", Skills: 75, Positions: "unknown" },
  { id: 9, name: "Ibrohim", Skills: 40, Positions: "defender" },
  { id: 10, name: "Abdulaziz-qq", Skills: 40, Positions: "right-attaker" },
  { id: 11, name: "Hotam", Skills: 72, Positions: "attacker" },
  { id: 12, name: "Abdulaziz-QQ", Skills: 81, Positions: "mid-player" },
  { id: 13, name: "Shoazam", Skills: 81, Positions: "right-mid" },
  { id: 14, name: "Shoafzal", Skills: 51, Positions: "right-defender" },
  { id: 15, name: "Ilyos", Skills: 70, Positions: "attacker" },
  { id: 16, name: "Ilyos", Skills: 71, Positions: "unknown" },
  { id: 17, name: "Shoislom", Skills: 81, Positions: "mid-defender" },
  { id: 18, name: "Shousmon", Skills: 84, Positions: "left-attacker" },
  { id: 22, name: "Otabek", Skills: 82, Positions: "goalkeeper" },
];

const players_list = document.querySelector(".player-list");

db.forEach((player) => {
  const li = document.createElement("li");

  li.setAttribute("class", "player-item m-3");

  if (player.Skills >= 90 && player.Skills < 100) {
    li.innerHTML = `
      <li class="player-item m-3">
        <button class="add-remove get gold" name="asd" onclick="(()=> {myFunc(${player.id}, this)})()"></button>
        <img src="../img/gold.png" alt="" width="200" height="300" />
        <span class="score">${player.Skills}</span>
        <span class="team-logo"></span>
        <span class="name">${player.name}</span>
      </li>`;
  }
  if (player.Skills >= 70 && player.Skills < 90) {
    li.innerHTML = `
      <li class="player-item m-3">
        <button class="add-remove get" onclick="(()=> {myFunc(${
          player.id
        }, this)})()"></button>
        <img src="../img/Badge.png" alt="" width="200" height="300" />
        <span class="score">${player.Skills + 5}</span>
        <span class="team-logo"></span>
        <span class="name">${player.name}</span>
      </li>`;
  }
  if (player.Skills < 70 && player.Skills > 0) {
    li.innerHTML = `
      <li class="player-item m-3">
        <button class="add-remove get bronze" onclick="(()=> {myFunc(${player.id}, this)})()"></button>
        <img src="../img/Bronze.png" alt="" width="200" height="300"/>
        <span class="score">${player.Skills}</span>
        <span class="team-logo"></span>
        <span class="name">${player.name}</span>
      </li>`;
  }
  players_list.appendChild(li);
});

const extraDb = [];

function myFunc(id, nmadur) {
  nmadur.classList.toggle("disabled");
  nmadur.classList.remove("get");

  setTimeout(() => {
    nmadur.classList.add("get");
  }, 3000);

  const choosenPl =
    JSON.parse(window.localStorage.getItem("choosen-players")) || [];
  const CHECK = choosenPl.findIndex((pl) => pl.id === id);
  console.log(CHECK);
  if (!(CHECK >= 0)) {
    const findPlayer = db.find((pl) => pl.id === id);
    console.log(findPlayer);
    window.localStorage.setItem(
      "choosen-players",
      JSON.stringify([findPlayer, ...choosenPl])
    );
    return;
  }

  choosenPl.splice(CHECK, 1);
  window.localStorage.setItem("choosen-players", JSON.stringify(choosenPl));
}

function getTeam(team) {
  window.localStorage.setItem("team", team);
}

function changeHome() {
  const db = JSON.parse(window.localStorage.getItem("choosen-players")) || [];
  if (db.length > 11) {
    window.location.replace("../views/teams.html");
  } else {
    alert("You have to pick minimum number of players from 12.");
  }
}

const model_back = document.querySelector(".modal-back");
const Mymodel = document.querySelector(".my-modal");
const okBtn = document.querySelector(".ok");
model_back.addEventListener("click", () => {
  var promise = document.querySelector(".mp3").play();
  if (promise !== undefined) {
    promise
      .then((_) => {
        // Autoplay started!
      })
      .catch((error) => {
        // Autoplay was prevented.
        console.log(error);
      });
  }
  Mymodel.classList.add("visually-hidden");
});
okBtn.addEventListener("click", () => {
  var promise = document.querySelector(".mp3").play();
  if (promise !== undefined) {
    promise
      .then((_) => {
        // Autoplay started!
      })
      .catch((error) => {
        // Autoplay was prevented.
        console.log(error);
      });
  }
  Mymodel.classList.add("visually-hidden");
});
