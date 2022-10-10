// variables
const db = JSON.parse(window.localStorage.getItem("choosen-players")) || [];
const teamNum = window.localStorage.getItem("team") || 3;
const player_list = document.querySelector(".carousel-inner");
const body = window.document.querySelector("body");
const openHtml = document.querySelector(".mystry");
const player_positions = [
  "striker",
  "rightattacker",
  "leftattacker",
  "goalkeeper",
  "centerfullback",
  "leftfullback",
  "rightfullback",
  "mider",
];

// group by skill function
const groupBySkill = (players, top, bottom = 0) => {
  return players.filter(
    (player) => player.Skills < top && player.Skills >= bottom
  );
};

// get random function
const getRandom = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
// end function

// create randomize players
const randomize = (players, teamCount) => {
  let teamsCount = Number(teamCount);
  if (players?.length < 1) return;
  const team90 = groupBySkill(players, 100, 90);
  const team80 = groupBySkill(players, 90, 80);
  const team70 = groupBySkill(players, 80, 70);
  const team60 = groupBySkill(players, 70);
  const teams = [];
  for (let i = 0; i < teamsCount; i++) {
    teams.push([]);
  }

  let i = 0;
  if (teamCount % team90.length == 0) {
    while (team90.length) {
      const randomPlayer = team90.splice(getRandom(team90.length), 1)[0];
      teams[i].push(randomPlayer);

      i++;
      if (i === teamsCount) {
        i = 0;
      }
    }
  } else {
    while (team90.length) {
      const randomPlayer = team90.splice(getRandom(team90.length), 1)[0];
      teams[i].push(randomPlayer);

      i++;
      if (i === teamsCount) {
        i = 0;
      }
    }
  }
  while (team80.length - 1) {
    const randomPlayer = team80.splice(getRandom(team80.length), 1)[0];
    teams[i].push(randomPlayer);

    i++;
    if (i === teamsCount) {
      i = 0;
    }
  }
  while (team70.length) {
    const randomPlayer = team70.splice(getRandom(team70.length), 1)[0];
    teams[i].push(randomPlayer);

    i++;
    if (i === teamsCount) {
      i = 0;
    }
  }
  while (team60.length) {
    const randomPlayer = team60.splice(getRandom(team60.length), 1)[0];
    teams[i].push(randomPlayer);

    i++;
    if (i === teamsCount) {
      i = 0;
    }
  }

  return {
    teams: teams,
    goldCard: team80,
  };
};
// end function

// pop up function
function createVideo() {
  var promise = document.querySelector(".mp3");
  // const video = document.createElement("video");
  // const skip = document.createElement("span");
  // video.setAttribute("loop", "loop");
  // video.setAttribute("class", "imtroVideo");
  // video.setAttribute("src", "../video/intro.mp4");
  // video.setAttribute("width", "100vw");
  // video.addEventListener("loadedmetadata", () => {
  //   video.play();
  // });
  // skip.setAttribute("class", "skip");
  // let i = 15;
  // const myclear = setInterval(() => {
    // i = i - 1;
    // skip.innerHTML = i;
  // }, 1000);
  // body.appendChild(video);
  // body.appendChild(skip);
  // setTimeout(() => {
    // clearInterval(myclear);
    // skip.innerText = "Skip loading";
    // skip.addEventListener("click", () => {
      // video.pause();
      // body.removeChild(video);
      // body.removeChild(skip);
      // promise.play("5s");
    // });
  // }, 15000);
  setTimeout(() => {
    // body.removeChild(video);
    // body.removeChild(skip);
    promise.play();
  }, 000);
}
// end function

// replpace function
openHtml.addEventListener("click", (e) => {
  window.localStorage.setItem("gold_card", JSON.stringify(allTeam[1]));
  window.location.replace("../views/mystery-player.html");
});
// end function

createVideo();
const { teams, goldCard } = randomize(db, teamNum);

const RTeams =
  JSON.parse(window.localStorage.getItem("randomized_teams")) || "";
if (!RTeams)
  window.localStorage.setItem(
    "randomized_teams",
    JSON.stringify([teams, goldCard])
  );

const allTeam = JSON.parse(window.localStorage.getItem("randomized_teams"));

allTeam[0].forEach((tm, i) => {
  if (i === 0) {
    let div = document.createElement("div");
    div.setAttribute("class", "carousel-item active");
    div.setAttribute("data-bs-interval", "false");
    div.innerHTML = `
    <span class="teamname">Team ${i + 1}</span>
    <img src="../img/line-up.svg" class="d-block w-100" alt="..." />
    ${tm.map(
      (pl, inl) => `
    <div class="position-absolute ${player_positions[inl]} t-shirts">
      <svg version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 295.526 295.526"
      style="enable-background: new 0 0 295.526 295.526"
      xml:space="preserve"
      class="t-shirt team-${i + 1}">
      <g>
        <path
          d="M147.763,44.074c12.801,0,23.858-8.162,27.83-20.169c-7.578,2.086-17.237,3.345-27.83,3.345c-10.592,0-20.251-1.259-27.828-3.345C123.905,35.911,134.961,44.074,147.763,44.074z"/>
        <path
          d="M295.158,58.839c-0.608-1.706-1.873-3.109-3.521-3.873l-56.343-26.01c-11.985-4.06-24.195-7.267-36.524-9.611c-0.434-0.085-0.866-0.126-1.292-0.126c-3.052,0-5.785,2.107-6.465,5.197c-4.502,19.82-22.047,34.659-43.251,34.659c-21.203,0-38.749-14.838-43.25-34.659c-0.688-3.09-3.416-5.197-6.466-5.197c-0.426,0-0.858,0.041-1.292,0.126c-12.328,2.344-24.538,5.551-36.542,9.611L3.889,54.965c-1.658,0.764-2.932,2.167-3.511,3.873c-0.599,1.726-0.491,3.589,0.353,5.217l24.46,48.272c1.145,2.291,3.474,3.666,5.938,3.666c0.636,0,1.281-0.092,1.917-0.283l27.167-8.052v161.97c0,3.678,3.001,6.678,6.689,6.678h161.723c3.678,0,6.67-3.001,6.67-6.678V107.66l27.186,8.052c0.636,0.191,1.28,0.283,1.915,0.283c2.459,0,4.779-1.375,5.94-3.666l24.469-48.272C295.629,62.428,295.747,60.565,295.158,58.839z"/>
      </g>
    </svg>
    <span class="player-num">${pl.id}</span>
    <span class="player-name">${pl.name}</span>
</div>`
    )}
    `;
    player_list.appendChild(div);
  } else {
    let div = document.createElement("div");
    div.setAttribute("class", "carousel-item");
    div.innerHTML = `
    <span class="teamname">Team ${i + 1}</span>
    <img src="../img/line-up.svg" class="d-block w-100" alt="..." />
    ${tm.map(
      (pl, inl) => `
    <div class="position-absolute ${player_positions[inl]} t-shirts">
      <svg version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 295.526 295.526"
      style="enable-background: new 0 0 295.526 295.526"
      xml:space="preserve"
      class="t-shirt team-${i + 1}" > 
      <g>
        <path
          d="M147.763,44.074c12.801,0,23.858-8.162,27.83-20.169c-7.578,2.086-17.237,3.345-27.83,3.345c-10.592,0-20.251-1.259-27.828-3.345C123.905,35.911,134.961,44.074,147.763,44.074z"/>
        <path
          d="M295.158,58.839c-0.608-1.706-1.873-3.109-3.521-3.873l-56.343-26.01c-11.985-4.06-24.195-7.267-36.524-9.611c-0.434-0.085-0.866-0.126-1.292-0.126c-3.052,0-5.785,2.107-6.465,5.197c-4.502,19.82-22.047,34.659-43.251,34.659c-21.203,0-38.749-14.838-43.25-34.659c-0.688-3.09-3.416-5.197-6.466-5.197c-0.426,0-0.858,0.041-1.292,0.126c-12.328,2.344-24.538,5.551-36.542,9.611L3.889,54.965c-1.658,0.764-2.932,2.167-3.511,3.873c-0.599,1.726-0.491,3.589,0.353,5.217l24.46,48.272c1.145,2.291,3.474,3.666,5.938,3.666c0.636,0,1.281-0.092,1.917-0.283l27.167-8.052v161.97c0,3.678,3.001,6.678,6.689,6.678h161.723c3.678,0,6.67-3.001,6.67-6.678V107.66l27.186,8.052c0.636,0.191,1.28,0.283,1.915,0.283c2.459,0,4.779-1.375,5.94-3.666l24.469-48.272C295.629,62.428,295.747,60.565,295.158,58.839z"/>
      </g>
    </svg>
    <span class="player-num">${pl.id}</span>
    <span class="player-name">${pl.name}</span>
</div>`
    )}
    `;
    player_list.appendChild(div);
  }
});
const clockP = document.createElement("span");
clockP.setAttribute("class", "clock");
function clock() {
  setInterval(() => {
    const clock = new Date().toLocaleTimeString();
    clockP.innerHTML = clock.toString();
  }, 1000);
  document.body.appendChild(clockP);
}
clock();

// const narx = document.createElement("narxnavo");

// function calcSum() {
//   // todo: first we should get players count!
//   const playerC = [teams, goldCard].flat(99).length || 0

//   // todo: and we should check total sum!
//   // ! code here

//   //  todo: and we should calculate each one person!
//   // ! code here

//   // todo: finally we should output the sum!
//   // ! code here
// }
// calcSum();
