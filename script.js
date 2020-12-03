// Modal

function openModal() {
  const modal = document.getElementById('modal')
  modal.classList.add('open')
}

function closeModal() {
  const modal = document.getElementById('modal')
  modal.classList.remove('open')  
}

function handleModalClick(e) {
  const closeClasses = [
    'modal open',
    'close',
  ]
  if (closeClasses.indexOf(e.target.className) > -1) {
    closeModal()
  }
}

document.getElementById('open-modal').onclick = openModal
document.getElementById('modal').onclick = handleModalClick



