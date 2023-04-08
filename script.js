let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Aerosmith', 'The Who'];

function removeArticles(bandName) {
  return bandName.replace(/^(a |an |the )/i, "").trim();
}

bandNames = bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

const ul = document.createElement("ul");
ul.setAttribute("id", "band");

bandNames.forEach((bandName) => {
  const li = document.createElement("li");
  li.textContent = bandName;
  ul.appendChild(li);
});

document.body.appendChild(ul);
