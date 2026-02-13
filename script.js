const bgSong = document.getElementById("bgSong");
const loveSong = document.getElementById("loveSong");

function unlock() {
  if (pass.value === "kdfradu") {
    lock.classList.remove("active");
    main.classList.add("active");
    bgSong.play(); // ✅ STARTS HERE (FIXED)
  } else {
    err.style.display = "block";
  }
}

function openGift(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "g2") {
    bgSong.pause();
    loveSong.play();
  } else {
    loveSong.pause();
    bgSong.play();
  }
}

function back() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  main.classList.add("active");
  loveSong.pause();
  bgSong.play();
}

function showGallery() {
  document.getElementById("gallery").style.display = "block";
}

const insta = document.getElementById("insta");
insta.addEventListener("mouseover", () => {
  insta.style.transform =
    `translate(${Math.random()*150-75}px,${Math.random()*150-75}px)`;
});