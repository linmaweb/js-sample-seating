import {
  seats,
  intro,
  count,
  titlePre,
  title,
  total,
  movieSelect,
  movieList,
} from "./variables";

const setMovieList = (element) => {
  movieList.forEach(function (movie) {
    let opt = document.createElement("option");
    opt.appendChild(
      document.createTextNode(`${movie.title} ($${movie.price})`)
    );
    opt.value = movie.price;
    element.appendChild(opt);
  });
};

const populateUI = () => {
  setMovieList(movieSelect);
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
};

const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
};

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  let ticketPrice = +movieSelect.value;

  const selectedMoviePrice = localStorage.getItem("selectedMoviePrice");
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMoviePrice !== null) {
    ticketPrice = selectedMoviePrice;
    titlePre.innerText = " for ";
    title.innerText = movieList[selectedMovieIndex].title;
  }

  if (selectedSeatsCount > 0) {
    intro.style.visibility = "visible";
  } else {
    intro.style.visibility = "hidden";
  }

  total.innerText = selectedSeatsCount * ticketPrice;
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
};

export { populateUI, setMovieData, updateSelectedCount };
