let nm = ["The abc", "a xyz", "An oprst", "the qwerty", "The mm", "A asd"];

function removeArticle(nm) {
  let articles = ["a", "an", "the"];
  let words = nm.split(" ");
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(" ");
}

nm.sort(function(a, b) {
  return removeArticle(a).localeCompare(removeArticle(b));
});

let ulElement = document.getElementById("band");

for (let i = 0; i < nm.length; i++) {
  let liElement = document.createElement("li");
  liElement.textContent = nm[i];
  ulElement.appendChild(liElement);
}
