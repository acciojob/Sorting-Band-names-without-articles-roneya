
let bandNames = ["The Beatles", "Led Zeppelin", "Pink Floyd", "Aerosmith", "The Who"];

function ra(arr) {
  return arr.replace(/^(a |an |the )/i, "").trim();
}

const sortedBandNames = bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});

