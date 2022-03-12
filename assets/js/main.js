const color_box = document.getElementById("color_box");

const gray_button = document.getElementById("gray_button");

gray_button.addEventListener("click", () => {
  color_box.className = "gray";
});

const blue_button = document.getElementById("blue_button");

blue_button.addEventListener("click", () => {
  color_box.className = "blue";
});
/* TODO 1: Adicionar um botão e um event handler e o botão torna o quadrado rosa. */

const pink_button = document.createElement("button");
pink_button.innerText = "Pink";
document.getElementById("botoes").appendChild(pink_button);
pink_button.addEventListener("click", () => {
  color_box.className = "pink";
});

let count = 0;

const counter_button = document.getElementById("counter_button");

const countspan = document.getElementById("countspan");

counter_button.addEventListener("click", () => {
  /* TODO 2: A função incrementa 1 em um contador "count", atualiza o conteúdo de texto do "countspan" e mostra o valor atual de "count". */
  atualizar(++count);
  function atualizar(val) {
    countspan.innerText = val;
  }
});

const even_or_odd_button = document.getElementById("even_or_odd_button");

even_or_odd_button.addEventListener("click", () => {
  /* TODO 3: A função mostra um "alert dialog" mostrando se o contador (da segunda tarefa (TODO 2)) é par ou impar. */
  if (count % 2 === 0) {
    alert("Counter is even!");
  } else if (count % 2 !== 0) {
    alert("Counter is odd!");
  }
});
