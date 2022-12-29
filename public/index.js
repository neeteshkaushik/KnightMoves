const sqrDivs = document.getElementsByClassName("sqr");

const showValidPositions = async (e) => {
  for (var i = 0; i < sqrDivs.length; i++) {
    sqrDivs[i].style.removeProperty("background");
  }

  const x = e.target.getAttribute("x");
  const y = e.target.getAttribute("y");

  const response = await fetch(`/api/v1/validPositions?x=${x}&y=${y}`);
  const data = await response.json();
  const { pos } = data;

  pos.forEach((point) => {
    const e = document.querySelector(`[x="${point.x}"][y="${point.y}"]`);
    e.style.background = "red";
  });
};

for (let i = 0; i < sqrDivs.length; i++) {
  sqrDivs[i].addEventListener("click", showValidPositions);
}
