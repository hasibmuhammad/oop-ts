const tableHeader = document.getElementById("table-header")
const tableRows = document.querySelectorAll("tbody tr")

let draggedElement

// steps: 1. Drag start 2. drop over 3. drop
tableHeader.addEventListener("dragstart", (e) => {
  draggedElement = e.target
  e.target.style.opacity = ".5"
  console.log(draggedElement)
})

// reset the opacity on drag end
tableHeader.addEventListener("dragend", (e) => {
  e.target.style.opacity = "1"
})

// step - 2 - Drop over
tableHeader.addEventListener("dragover", (e) => e.preventDefault())

// step - 3 - Drop
tableHeader.addEventListener("drop", (e) => {
  e.preventDefault()

  const target = e.target

  if (target.tagName && target !== draggedElement) {
    const draggedElIndex = [...tableHeader.children].indexOf(draggedElement)
    const targetElIndex = [...tableHeader.children].indexOf(target)
    tableHeader.insertBefore(
      draggedElement,
      targetElIndex < draggedElIndex ? target : target.nextSibling
    )

    tableRows.forEach((row) => {
      const cells = row.children
      const draggedCell = cells[draggedElIndex]
      const targetCell = cells[targetElIndex]

      row.insertBefore(
        draggedCell,
        targetElIndex < draggedElIndex ? targetCell : targetCell.nextSibling
      )
    })
  }
})
