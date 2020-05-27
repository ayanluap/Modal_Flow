// Event type btn
pop1 = document.querySelector('.popup1');

// Event Type var
const eventType = document.getElementById('eventType');
// get close btn
const close = document.querySelector('.close');
// Event buttons
const pfBtn = document.querySelector('.eventTypeBtn');

// Adding Event listeners
pop1.addEventListener('click', popup1);
close.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
pfBtn.addEventListener('click', enableEventTypeNext);

// tooltip loader
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
