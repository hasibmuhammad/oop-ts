const draggableEl = document.getElementById("draggable")
const dropZoneEl = document.getElementById("dropzone")

// drag start
// drag over
// drop 

draggableEl.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id)
  console.log("Drag started")
})

dropZoneEl.addEventListener("dragover", (e) => {
  e.preventDefault()
  console.log("Dragged over the dropzone")
})

dropZoneEl.addEventListener("drop", (e) => {
  e.preventDefault()
  const data = e.dataTransfer.getData("text/plain")
  const draggedEl = document.getElementById(data)
  dropZoneEl.append(draggedEl)
  console.log("Dropped successfully!")
})
