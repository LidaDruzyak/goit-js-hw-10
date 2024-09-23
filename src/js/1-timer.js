import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

'use strict';
const dataTime = document.querySelector('#datetime-picker'),
dataDays = document.querySelector('[data-days]'),
dataHours = document.querySelector('[data-hours]'),
dataMinutes = document.querySelector('[data-minutes]'),
dataSeconds = document.querySelector('[data-seconds]'),
btnStart = document.querySelector('[data-start]');

let userSelectedDate;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    validateDate();
    },
  };

  flatpickr(dataTime, options)

  function validateDate() {
    if(userSelectedDate < Date.now()) {
        iziToast.show({
            title: "ERROR:  ",
            titleColor: "red",
            message: "Please choose a date in the future",
            messageColor: "red",
            position: "topCenter",
            closeOnEscape: true,
            closeOnClick: true,
        });
        btnStart.disabled = true;
    } else {
        dataTime.disabled = true;
        btnStart.disabled = false;
    }
  }
  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, "0");
  }

  function updateTimer({days, hours, minutes, seconds}) {
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
  }

  let countInterval;

  function startCount() {
    btnStart.disabled = true;
    dataTime.disabled = true;
    countInterval = setInterval(() => {
        const today = new Date();
        const timeRemaining = userSelectedDate - today;
        if(timeRemaining <= 0) {
            clearInterval(timerInterval);
            btnStart.disabled = false;
            dataTime.disabled = false;
            updateTimer({days: 0, hours: 0, minutes: 0, seconds: 0});
            return
        }
        const timeComponents = convertMs(timeRemaining);
        updateTimer(timeComponents);
    }, 1000)
  }

  btnStart.addEventListener('click', startCount);
  