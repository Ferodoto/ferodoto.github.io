function clickCounter() {
  const x = document.getElementById("clicks");
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    x.innerHTML = "Llevas " + localStorage.clickcount + " click(s)!";
  } else {
    x.innerHTML = "Lo lamento tu navegador no es compatible!";
  }
}