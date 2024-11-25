const draggable = document.getElementById("draggable")
const dropzones = document.querySelectorAll(".dropzone")

// drag start
draggable.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("dragData", e.target.id)
  console.log("Drag started")
})

// for individual dropzone
dropzones.forEach((zone) => {
  // drag over
  zone.addEventListener("dragover", (e) => {
    e.preventDefault()
    console.log("Dragged over the", e.target.id)
  })

  // handle the drop
  zone.addEventListener("drop", (e) => {
    const data = e.dataTransfer.getData("dragData")
    const dataEl = document.getElementById(data)
    zone.textContent = ""
    zone.append(dataEl)
  })
})
