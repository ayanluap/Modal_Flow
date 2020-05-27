///////////////// EVENT TYPE FUNC ///////////

// Open Event Type Modal
function eventTypeModalOpen() {
  eventType.style.display = 'block';
  addDisable();
}

// Close Event Type Modal
function eventTypeModalClose() {
  eventType.style.display = 'none';
  addDisable();
}

// Close modals on outside click
function outsideClick(e) {
  if (e.target == eventType) {
    eventTypeModalClose();
  } else if (e.target == paidEvent) {
    paidEventModalClose();
    eventTypeModalOpen();
  }
}

// Add and Remove "disable" on Event Type Next
function remDisable(e) {
  eventTypeNext.classList.remove('disabled');
}
function addDisable(e) {
  eventTypeNext.classList.add('disabled');
}

// diable or enable next btn based on where clicked
function disableEnableEventTypeNext(e) {
  if (e.target === free || e.target === paid) {
    remDisable();
  } else {
    addDisable();
  }
}

// Event Type Next btn click
function popup2() {
  if (eventTypeNext.classList.contains('disabled')) {
    alert('Choose any one to proceed');
  } else {
    paidEventModalOpen();
  }
}

///////////////// PAID EVENT FUNC ///////////

// Open Paid Event Modal after Clicking Next
function paidEventModalOpen() {
  eventTypeModalClose();
  paidEvent.style.display = 'block';
}

// Close Paid Event Modal
function paidEventModalClose() {
  eventTypeModalOpen();
  paidEvent.style.display = 'none';
}

// Remove / Add paid Event next disable
function addDisable2() {
  paidEventNext.classList.add('disabled');
}
function remDisable2() {
  paidEventNext.classList.remove('disabled');
}

// diable or enable next btn based on where clicked
function disableEnablePaidEventNext(e) {
  console.log(e);
  if (e.target === single || e.target === mult) {
    remDisable2();
  } else {
    addDisable2();
  }
}
