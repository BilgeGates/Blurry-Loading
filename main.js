const img_bg = document.querySelector(".img-bg");
const loading = document.querySelector(".loading");
let load = 0;
let headBlur = setInterval(blur, 30);

function blur() {
  load++;
  if (load > 99) {
    clearInterval(headBlur);
  }

  loading.innerHTML = `${load}%`;
  loading.style.opacity = scale(load, 0, 100, 1, 0);
  img_bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// ! Bu yeri anlamadım

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
