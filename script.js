const song = document.getElementById("song");
const loveSong = document.getElementById("loveSong");
let songTime = 0;

window.onload = () => {
  song.play();
};

function unlock() {
  const pwd = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pwd === "kdfradu") {
    error.style.display = "none";
    lockScreen.classList.remove("active");
    main.classList.add("active");
  } else {
    error.style.display = "block";
  }
}

function openGift(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "gift2") {
    songTime = song.currentTime;
    song.pause();
    loveSong.play();
  } else {
    loveSong.pause();
    song.currentTime = songTime;
    song.play();
  }
}

function goBack() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  main.classList.add("active");
  loveSong.pause();
  song.currentTime = songTime;
  song.play();
}

const insta = document.getElementById("insta");
insta.addEventListener("mouseover", () => {
  insta.style.transform =
    `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
});

function chooseMe() {
  document.getElementById("gallery").style.display = "grid";
}