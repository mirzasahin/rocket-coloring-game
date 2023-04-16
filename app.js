
const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
let selectedColor = "white";

function setColor(color) {
  selectedColor = color; //e.currentTarget.style.backgroundColor
  document.getElementById("selected").style.backgroundColor = color;
}

for (let i = 0; i < colors.length; i++) {
  const newColor = document.createElement("div");
  newColor.style.backgroundColor = colors[i];
  document.getElementById("colors").appendChild(newColor);
  newColor.addEventListener("click", function () {
    setColor(colors[i]);
  });
}
const items = document.getElementsByTagName("path");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    e.currentTarget.setAttribute("fill", selectedColor);
  });
}

document.getElementById("picker").addEventListener("change", function (e) {
  setColor(e.currentTarget.value);
  // selectedColor = e.currentTarget.value
  // document.getElementById('selected').style.backgroundColor = selectedColor
});

const reset = document.getElementById('resetColors');
reset.addEventListener('click', () => {
    const items = document.getElementsByTagName("path");
    for(let i = 0; i < items.length; i++){
        items[i].setAttribute('fill', 'white');
    }
})