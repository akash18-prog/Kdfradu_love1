const song = document.getElementById("song");
const loveSong = document.getElementById("loveSong");
song.play();

function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "kdfradu") {
    document.getElementById("lockScreen").classList.remove("active");
    document.getElementById("main").classList.add("active");
  } else {
    document.getElementById("error").style.display = "block";
  }
}

function openGift(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goBack() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("main").classList.add("active");
}

const insta = document.getElementById("insta");
insta.addEventListener("mouseover", () => {
  insta.style.transform = `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
});

function chooseMe() {
  song.pause();
  loveSong.play();
  document.getElementById("gallery").style.display = "block";
}