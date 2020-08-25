const seating = document.querySelector(".seating");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const intro = document.getElementById("intro");
const count = document.getElementById("count");
const titlePre = document.getElementById("title-pre");
const title = document.getElementById("title");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const movieList = [
  { title: "Captain Marvel", price: 15 },
  { title: "Avengers: Endgame", price: 18 },
  { title: "Spider-Man: Far From Home", price: 12 },
  { title: "Black Widow", price: 20 },
  { title: "The Eternals", price: 24 },
  { title: "Shang-Chi and the Legend of the Ten Rings", price: 22 },
  { title: "Thor: Love and Thunder", price: 16 },
  { title: "Doctor Strange in the Multiverse of Madness", price: 20 },
  { title: "Black Panther II", price: 10 },
  { title: "Ant-Man and the Wasp", price: 15 },
  { title: "Thor: Ragnarok", price: 12 },
  { title: "Spider-Man: Homecoming", price: 11 },
  { title: "Guardians of the Galaxy Vol. 2", price: 10 },
  { title: "Doctor Strange", price: 12 },
  { title: "Captain America: Civil War", price: 14 },
  { title: "Iron Man 3", price: 13 },
  { title: "The Incredible Hulk", price: 11 },
  { title: "Avengers: Age of Ultron", price: 12 },
  { title: "Captain America: The First Avenger", price: 15 },
];

export {
  seating,
  seats,
  intro,
  count,
  titlePre,
  title,
  total,
  movieSelect,
  movieList,
};
