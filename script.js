
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function ra(arr) {
  return arr.replace(/^(a |an |the )/i, "").trim();
}

touristSpots = touristSpots.sort((a, b) => {
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

