// Update time values every second
let unixTime = document.querySelector('#unix-time p');
let subdate = document.querySelector('#subdate');

updateTimes();
setInterval(updateTimes, 1000);

function updateTimes() {
    unixTime.innerText = getUnixTime();
    subdate.innerText = getDateValue();
}

function getUnixTime() {
    return (Date.now() / 1000) | 0;
}

function getDateValue() {
    let options = {
        day: 'numeric', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    return new Date().toLocaleDateString('en-US', options);
}

// Initialize "copy" button 
let copy = document.querySelector('#unix-time .copy');
copy.onclick = function () {
    navigator.clipboard.writeText(getUnixTime());
};

// Initialize converter fields
let dateField = document.getElementById('date-field');
let timeField = document.getElementById('time-field');
let unixField = document.getElementById('unix-field');

dateField.oninput = updateUnixField;
timeField.oninput = updateUnixField;
unixField.oninput = updateTimeField;

function updateUnixField() {
    let date = new Date(dateField.value + 'T' + timeField.value);
    unixField.value = isNaN(date) ? null : Math.floor(date.getTime() / 1000);
}

function updateTimeField() {
    let date = new Date(unixField.value * 1000);
    dateField.valueAsDate = date;
    timeField.valueAsDate = date;
}

// Show main page
let main = document.querySelector('main')
main.style.opacity = 1;