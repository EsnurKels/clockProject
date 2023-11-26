let previousHourValue = -1;
let previousMinValue = -1;

function updateClock() {
    const clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
 
    const hoursDOM = document.querySelector('#hours');
    hoursDOM.innerHTML = hour;

    if (hour > previousHourValue) {
        const clockElements = document.querySelectorAll('.clock');

        clockElements.forEach((element, index) => {
            if (index === 0 || index === 1) {
                element.classList.add('clock-animasyon');
                setTimeout(() => {
                    element.classList.remove('clock-animasyon');
                }, 2000);
            }
        });
    }

    const minutesDOM = document.querySelector('#minutes');
    minutesDOM.innerHTML = minute;

    if (minute > previousMinValue) {
        const clockElements = document.querySelectorAll('.clock');

        clockElements.forEach((element, index) => {
            if (index === 2 || index === 3) {
                element.classList.add('clock-animasyon');
                setTimeout(() => {
                    element.classList.remove('clock-animasyon');
                }, 2000);
            }
        });
    }

    previousMinValue = minute;
    previousHourValue = hour;
}

updateClock();

setInterval(updateClock, 1000);