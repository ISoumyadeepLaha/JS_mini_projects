const btn = document.querySelector("#button");

const randomColor = () => {
  let value = "0123456789ABCDEF";
  let constant = "#";
  for (let i = 0; i < 6; i++) {
    constant = constant + value[Math.floor(Math.random() * 16)];
  }
  return constant;
};
// console.log(randomColor());

btn.addEventListener("click", function randomColorChanger() {
  document.getElementById("canvas").style.backgroundColor = randomColor();
});
