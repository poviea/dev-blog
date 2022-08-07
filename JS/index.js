const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

const btn_res = document.querySelector('#btn-res');
const res = document.querySelectorAll('.res-img');

btn_res.addEventListener('click', () => {
  for (let i = 0; i < res.length; i++) {
    res[i].classList.toggle('resolution');
  }
  if (btn_res.innerHTML == '2.39:1') {
    btn_res.innerHTML = '4:3';
  } else {
    btn_res.innerHTML = '2.39:1';
  }
});