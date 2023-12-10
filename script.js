const rollEl = document.querySelector("#roll");
const adviceEl = document.querySelector("#advice-text");
const adviceNum = document.querySelector("#advice");

rollEl.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      adviceEl.innerHTML = data.slip.advice;
      adviceNum.innerHTML = "ADVICE #" + data.slip.id;
    })
    .catch((err) => {
      console.log(err);
    });
});
