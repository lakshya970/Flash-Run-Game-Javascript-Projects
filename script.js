score = 0;
cross = true;

audio = new Audio("back.mp3");
audiogame = new Audio("gameOver.mp3");
setTimeout(() => {
  audio.play();
}, 1000);

document.onkeydown = function (e) {
  console.log("code is:", e.keyCode);
  if (e.keyCode == 38) {
    flesh = document.querySelector(".flesh");
    flesh.classList.add("animateflesh");
    setTimeout(() => {
      flesh.classList.remove("animateflesh");
    }, 700);
  }

  if (e.keyCode == 39) {
    flesh = document.querySelector(".flesh");
    fleshX = parseInt(
      window.getComputedStyle(flesh, null).getPropertyValue("left")
    );
    flesh.style.left = fleshX + 112 + "px";
  }

  if (e.keyCode == 37) {
    flesh = document.querySelector(".flesh");
    fleshX = parseInt(
      window.getComputedStyle(flesh, null).getPropertyValue("left")
    );
    flesh.style.left = fleshX - 112 + "px";
  }
};

setInterval(() => {
  flesh = document.querySelector(".flesh");
  gameover = document.querySelector(".gameover");
  opstical = document.querySelector(".opstical");

  fx = parseInt(window.getComputedStyle(flesh, null).getPropertyValue("left"));
  fy = parseInt(window.getComputedStyle(flesh, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(opstical, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(opstical, null).getPropertyValue("top")
  );

  offsetX = Math.abs(fx - ox);
  offsety = Math.abs(fy - oy);

  if (offsetX < 93 && offsety < 52) {
    gameover.style.visibility = "visible";
    opstical.classList.remove("opsticalani");
    audiogame.play();
    setTimeout(() => {
      audiogame.pause();
      audio.pause();
    }, 2000);
  } else if (offsetX < 130 && cross) {
    score += 10;
    updatescore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(opstical, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.3;
      opstical.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 10);

function updatescore(score) {
  scoreCon.innerHTML = "Your Score: " + score;
}
