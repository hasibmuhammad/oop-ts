const snapItem = document.getElementById("snap-item")
const snapGrids = document.querySelectorAll(".snap-grid")

snapItem.addEventListener("dragstart", () => {
  snapItem.style.opacity = "0.5"
})

snapItem.addEventListener("dragend", () => {
  snapItem.style.opacity = "1"
})

snapGrids.forEach((grid) => {
  grid.addEventListener("dragover", (e) => e.preventDefault())

  grid.addEventListener("drop", () => {
    grid.appendChild(snapItem)
    snapItem.style.transform = "translate(0, 0)" // Reset position
  })
})
