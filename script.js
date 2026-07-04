let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("musica");
}

function openLetter() {
  const envelope = document.getElementById("envelope");

  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    if (player && player.playVideo) {
      player.playVideo();
    }
  } else {
    if (player && player.pauseVideo) {
      player.pauseVideo();
    }
  }
}

function createHeart() {
  const heart = document.createElement("span");

  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);