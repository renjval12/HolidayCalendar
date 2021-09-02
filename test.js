let today = new Date();
let mm = today.getMonth() + 1; //As January is 0.
let monthName = ''
switch (mm) {
    case 1:
        monthName = 'January'
        break;
    case 2:
        monthName = 'February'
        break;
    case 3:
        monthName = 'March'
        break;
    case 4:
        monthName = 'April'
        break;
    case 5:
        monthName = 'May'
        break;
    case 6:
        monthName = 'June'
        break;
    case 7:
        monthName = 'July'
        break;
    case 8:
        monthName = 'August'
        break;
    case 9:
        monthName = 'September'
        break;
    case 10:
        monthName = 'October'
        break;
    case 11:
        monthName = 'November'
        break;
    case 12:
        monthName = 'December'
        break;
    default:
        break;
}

randomColor = (opacity) => `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${opacity})`

// function getHolidayDetails()
fetch(`https://holidayapi.com/v1/holidays?pretty&key=0541da98-81ad-4999-a3be-13ae29e1d82f&country=US&year=2020&month=${mm}`)
    .then((response) => response.json())
    .then((data) => {
        
        for (i = 0; i < data.holidays.length; i++) {
            let holidayDateArr = ''
            holidayDateArr+=data.holidays[i].date.split('-')[2]
            console.log(holidayDateArr)
            document.getElementById('month').innerHTML = monthName
            document.getElementById('month').style.color = randomColor(1)
            document.getElementById('holiday-obj').innerHTML += `<div id='holiday-${i + 1}'><h3>Holiday # ${i + 1} : ${data.holidays[i].name} </h3><p>Date of Holiday: ${data.holidays[i].date} </p></div>`
            document.getElementById(`holiday-${i + 1}`).style.backgroundColor = randomColor(0.2)
        }
    })
    .catch((err) => { console.error(err); });

