// Event type Popup show
setTimeout(() => {
  eventType.style.display = 'block';
}, 1000);

// Event type Popup show on clicking btn
function popup1() {
  if (document.querySelector('.popup1').clicked == true) {
    alert('button was clicked');
  }
}

// close modal when click on cross
function closeModal() {
  eventType.style.display = 'none';
}

// close modal when click on outside
function outsideClick(e) {
  if (e.target === eventType) {
    eventType.style.display = 'none';
  }
}

// Enable event type btn
function enableEventTypeNext() {
  console.log(this);

  if (this.classList.contains('disabled')) {
    // pfBtn.classList.remove('disabled');
    console.log(212);
  }
}
