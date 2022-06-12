function addingEventListener() {
    const input = document.getElementById(`button`);

function clickAlert() {
    alert(`I was clicked!`);
};

input.addEventListener(`click`, clickAlert);
};

addingEventListener();

// Important note: addingEventListener(); calls the function
// addingEventListener only references it. Likewise clickAlert
// is a reference but clickAlert() would trigger the function.

