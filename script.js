function yesClicked() {

  document.getElementById("surprise").style.display = "block";

  document.getElementById("music").play();

}

function moveNo() {

  const btn = document.getElementById("noBtn");

  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 100);

  btn.style.left = x + "px";
  btn.style.top = y + "px";
}