let monthName =document.querySelector('.month-name')
function getMonth(){
    let now = new Date();
    let currentMonth = now.getMonth() + 1;
  console.log(now.toDateString());
    switch(true) {
        // 1
        case currentMonth===1 :
        monthName.textContent = "January";
        break;
        // 2
         case currentMonth===2:
        monthName.textContent = "Febraury";
        break;
        // 3
         case currentMonth===3 :
        monthName.textContent = "March";
        break;
        // 4
         case currentMonth===4 :
        monthName.textContent = "April";
        break;
        // 5
         case currentMonth===5 :
        monthName.textContent = "May";
        break;
        // 6
         case currentMonth===6 :
        monthName.textContent = "June";
        break;
        // 7
         case currentMonth===7 :
        monthName.textContent = "July";
        break;
        // 8
         case currentMonth===8 :
        monthName.textContent = "August";
        break;
        // 9
         case currentMonth===9 :
        monthName.textContent = "September";
        break;
        // 10
         case currentMonth===10 :
        monthName.textContent = "October";
        break;
        // 11
         case currentMonth===11 :
        monthName.textContent = "November";
        break;
        // 12
         case currentMonth===12 :
        monthName.textContent = "Decemeber";
        break;
    }
}
getMonth()