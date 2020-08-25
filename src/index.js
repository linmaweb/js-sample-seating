import { seating, movieSelect } from "./variables";
import { populateUI, setMovieData, updateSelectedCount } from "./view";

populateUI();

movieSelect.addEventListener("change", (e) => {
  let ticketPrice = +movieSelect.value;
  ticketPrice = +e.target.value;

  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

seating.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

updateSelectedCount();
