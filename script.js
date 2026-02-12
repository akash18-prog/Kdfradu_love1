const song = document.getElementById("song");
const loveSong = document.getElementById("loveSong");

song.play();

function unlock() {
  if (password.value === "kdfradu") {
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
    song.pause();
    loveSong.play();
  } else {
    loveSong.pause();
    song.play();
  }
}

function goBack() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  main.classList.add("active");
  loveSong.pause();
  song.play();
}

const insta = document.getElementById("insta");
insta.addEventListener("mouseover", () => {
  insta.style.transform =
    `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
});

function chooseMe() {
  document.getElementById("gallery").style.display = "block";
}