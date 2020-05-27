// Event type modal load auto
setTimeout(() => {
  eventTypeModalOpen();
}, 800);

// tooltip loader
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

////////////////////EVENT TYPE ///////////////////////

//--------- VARS ---------//

// Event type popup btn (done)
const popBtn1 = document.querySelector('.popBtn1');
// Event Type var (done)
const eventType = document.getElementById('eventType');
// get close btn (done)
const close = document.querySelector('.close');
// Event buttons
const pfBtn = document.querySelector('.eventTypeBtn');
// Get paid and free btn (done)
const paid = document.querySelector('.btn-outline-success');
const free = document.querySelector('.btn-outline-danger');
// get event type next button (done)
const eventTypeNext = document.querySelector('.eventTypeNext');
// get anything outside modal btn (done)
const outsideEventTypeNext = document.querySelectorAll('.modal-content')[0];

//--------EVENT LISTENERS--------//

window.addEventListener('click', outsideClick);
outsideEventTypeNext.addEventListener('click', disableEnableEventTypeNext);
popBtn1.addEventListener('click', eventTypeModalOpen);
close.addEventListener('click', eventTypeModalClose);
paid.addEventListener('click', remDisable);
free.addEventListener('click', remDisable);
eventTypeNext.addEventListener('click', popup2);

//////////////////// PAID EVENT /////////////////////

//--------- VARS ---------//

// Get Paid Event Id
const paidEvent = document.getElementById('paidEvent');
// Get Back btn
const peArrow = document.querySelector('#paidEvent .fa-arrow-left');
// Get single / multiple cost button
const single = document.querySelector('.btn-outline-info');
const mult = document.querySelectorAll('.btn-outline-primary')[0];
// paid Event next btn
const paidEventNext = document.querySelector('.paidEventNext');
// get anything outside modal btn
const outsidePaidEventNext = document.querySelectorAll('.modal-content')[1];

//--------EVENT LISTENERS--------//
peArrow.addEventListener('click', paidEventModalClose);
single.addEventListener('click', remDisable2);
mult.addEventListener('click', remDisable2);
outsidePaidEventNext.addEventListener('click', disableEnablePaidEventNext);
