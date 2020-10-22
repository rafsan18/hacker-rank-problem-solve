// 12AM => 00 *
// 12PM => 12*
// 01-11 AM => no change*
// 01-11 PM => +12

function timeConversion(s) {
    const period = s.slice(s.length - 2);
    const hourStr = s.slice(0, 2);
    let militaryHour = "";
    if (period === "AM") {
        if (hourStr === "12") {
            militaryHour = "00";
        } else {
            militaryHour = hourStr;
        }
    } else {
        if (hourStr === "12") {
            militaryHour = hourStr;
        } else {
            const hourInNumber = parseInt(hourStr, 10);
            militaryHour = 12 + hourInNumber;
        }
    }

    let militaryTime = militaryHour + s.slice(2, 8);
    return militaryTime;
}

// const time12 = "12:45:54AM";

// console.log(timeConversion(time12));
