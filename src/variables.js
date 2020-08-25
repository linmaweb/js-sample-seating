const seating = document.querySelector(".seating");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

export { seating, seats, count, total, movieSelect };
