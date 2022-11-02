let currentVote = Math.random() > 0.5;
const voteField = document.querySelector("#vote");

const setVote = () => {
  voteField.innerHTML = currentVote ? "👍" : "👎";
  document.body.style.backgroundColor = currentVote
    ? "green"
    : "red";
};

setVote();

document.body.addEventListener("click", () => {
  currentVote = !currentVote;
  setVote();
});
