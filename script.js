// let year = 2005, month = 10, day = 2;

// console.log(date1);
// console.log(date2);
// console.log(date3);

function calculateStart() {
    // time is 
    const date = new Date(Date());
    const date1 = date.getDate();
    const date2 = date.getMonth() + 1;
    const date3 = date.getFullYear();

    let dayInput = document.querySelector(".day input");
    let dayLabel = document.querySelector(".day label");
    let days = document.getElementById("days");
    let monthInput = document.querySelector(".month input");
    let monthLabel = document.querySelector(".month label");
    let month = document.getElementById("months");
    let yearInput = document.querySelector(".year input");
    let yearLabel = document.querySelector(".year label");
    let year = document.getElementById("years");
    let input_error1 = document.querySelector(".input_error1");
    let input_error2 = document.querySelector(".input_error2");
    let input_error3 = document.querySelector(".input_error3");
    let isDay = true, isMonth = true, isYear = true;

    if (dayInput.value.length == 0) {
        dayInput.classList.add("errorActive");
        dayLabel.style.color = "red";
        input_error1.innerHTML = "This field is required";
        isDay = false;
    }
    else if (!(dayInput.value.length > 0 && dayInput.value.length < 3) || Number(dayInput.value) <= 0 || Number(dayInput.value) > 32) {
        dayInput.classList.add("errorActive");
        dayLabel.style.color = "red";
        input_error1.innerHTML = "Must be a valid day";
        isDay = false;
    } else {
        dayInput.classList.remove("errorActive");
        dayLabel.style.color = "black";
        input_error1.innerHTML = "";
        isDay = true;
    }

    if (monthInput.value.length == 0) {
        monthInput.classList.add("errorActive");
        monthLabel.style.color = "red";
        input_error2.innerHTML = "This field is required";
        isMonth = false;
    }
    else if (!(monthInput.value.length > 0 && monthInput.value.length < 3) || Number(monthInput.value) <= 0 || Number(monthInput.value) > 12) {
        monthInput.classList.add("errorActive");
        monthLabel.style.color = "red";
        input_error2.innerHTML = "Must be a valid month";
        isMonth = false;
    } else {
        monthInput.classList.remove("errorActive");
        monthLabel.style.color = "black";
        input_error2.innerHTML = "";
        isMonth = true;
    }

    if (yearInput.value.length == 0) {
        yearInput.classList.add("errorActive");
        yearLabel.style.color = "red";
        input_error3.innerHTML = "This field is required";
        isYear = false;
    }
    else if (!(yearInput.value.length > 0 && yearInput.value.length < 5) || yearInput.value > date3) {
        yearInput.classList.add("errorActive");
        yearLabel.style.color = "red";
        input_error3.innerHTML = "Must be a valid year";
        isYear = false;
    } else {
        yearInput.classList.remove("errorActive");
        yearLabel.style.color = "black";
        input_error3.innerHTML = "";
        isYear = true;
    }
    // start
    if (isDay && isMonth && isYear) {
        let resYear = date3 - yearInput.value;
        let resMonth, resDay;
        if (date2 > monthInput.value){
            resMonth = date2 - Number(monthInput.value);
        }
        if (date1 > dayInput.value) {
            resDay = date1 - Number(dayInput.value);
        }

        days.innerHTML = resDay;
        month.innerHTML = resMonth;
        year.innerHTML = resYear;
    }else {
        days.innerHTML = "--";
        month.innerHTML = "--";
        year.innerHTML = "--";
    }

}