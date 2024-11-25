const tableHeader = document.getElementById("table-header")
const tableRows = document.querySelectorAll("tbody tr")
let draggedElement

// Handle column drag-and-drop
tableHeader.addEventListener("dragstart", (e) => {
  draggedElement = e.target
  e.target.style.opacity = "0.5"
})

tableHeader.addEventListener("dragend", (e) => {
  e.target.style.opacity = "1"
})

tableHeader.addEventListener("dragover", (e) => e.preventDefault())

tableHeader.addEventListener("drop", (e) => {
  e.preventDefault()
  const target = e.target
  if (target.tagName === "TH" && target !== draggedElement) {
    const draggedIndex = [...tableHeader.children].indexOf(draggedElement)
    const targetIndex = [...tableHeader.children].indexOf(target)

    // Swap header cells
    tableHeader.insertBefore(
      draggedElement,
      targetIndex < draggedIndex ? target : target.nextSibling
    )

    // Swap corresponding column data in rows
    tableRows.forEach((row) => {
      const cells = row.children
      const draggedCell = cells[draggedIndex]
      const targetCell = cells[targetIndex]
      row.insertBefore(
        draggedCell,
        targetIndex < draggedIndex ? targetCell : targetCell.nextSibling
      )
    })
  }
})

// Handle row drag-and-drop
tableRows.forEach((row) => {
  row.addEventListener("dragstart", (e) => {
    draggedElement = e.target
    e.target.style.opacity = "0.5"
  })

  row.addEventListener("dragend", (e) => {
    e.target.style.opacity = "1"
  })

  row.addEventListener("dragover", (e) => e.preventDefault())

  row.addEventListener("drop", (e) => {
    e.preventDefault()
    const target = e.target.closest("tr")
    if (target && target !== draggedElement) {
      const parent = draggedElement.parentNode
      parent.insertBefore(draggedElement, target.nextSibling)
    }
  })
})
