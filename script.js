const bg = document.getElementById("bg");
const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");

const allSongs = [bg, song1, song2, song3, song4];

window.onload = () => {
  bg.play();
};

function stopAllSongs() {
  allSongs.forEach(song => {
    song.pause();
    song.currentTime = 0;
  });
}

function unlock() {
  const pwd = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pwd === "kdfradu") {
    error.style.display = "none";
    lockScreen.classList.remove("active");
    main.classList.add("active");
    bg.play();
  } else {
    error.style.display = "block";
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }
  }
}

function openGift(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  stopAllSongs();

  if (id === "gift1") song1.play();
  if (id === "gift2") song2.play();
  if (id === "gift3") song3.play();
  if (id === "gift4") song4.play();
}

function goBack() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  main.classList.add("active");

  stopAllSongs();
  bg.play();
}

const insta = document.getElementById("insta");
if (insta) {
  insta.addEventListener("mouseover", () => {
    insta.style.transform =
      `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
  });
}

function chooseMe() {
  document.getElementById("gallery").style.display = "grid";
}