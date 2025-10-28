    
    var fetchedDates = "SICKO";

    //page logic for the calender
    
        // Get references to DOM elements
        const monthYearDisplay = document.getElementById('monthYear');
        const calendarDaysContainer = document.getElementById('calendarDays');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        const messageBox = document.getElementById('messageBox');
        const messageText = document.getElementById('messageText');
        const closeMessageBoxBtn = document.getElementById('closeMessageBox');

        //personal coded for booked times
        var availableTimes = ["8am - 9am", "9am - 10am", "11am - 12am"];
        var bookedTimes = ["8am - 9am", "9am - 10am"];
        /**
        var bookedDays = {
    "2025": {
        "January": {
            "1": ["8am - 9am", "9am - 10am"],
            "2": ["8am - 9am", "9am - 10am"]
        },
        "May": {
            "22": ["8am - 9am", "9am - 10am"],
            "23": ["8am - 9am", "9am - 10am"],
            "24": ["8am - 9am", "9am - 10am"],
            "27": ["8am - 9am", "9am - 10am"]
        },
        "April": {
            "22": ["8am - 9am", "9am - 10am"],
            "23": ["8am - 9am", "9am - 10am", "11am - 12am"],
            "24": ["8am - 9am", "9am - 10am"]
        },
        "June": {
            "4": ["8am - 9am", "9am - 10am"],
            "11": ["8am - 9am", "9am - 10am"],
            "16": ["8am - 9am", "9am - 10am", "11am - 12am"],
            "18": ["8am - 9am", "9am - 10am", "11am - 12am"],
            "24": ["8am - 9am", "9am - 10am"]
        },
        "July": {
            "22": ["8am - 9am", "9am - 10am"],
            "23": ["8am - 9am", "9am - 10am", "11am - 12am"],
            "24": ["8am - 9am", "9am - 10am"]
        }
    }
};
**/

//let bookedDays = fetchedDates;
console.log("THE ERROR " + fetchedDates);
let bookedDays = {};

/**
let bookedDays = {
    "2025": {
        "January": {
            "1": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }],
            "2": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }]
        },
        "June": {
            "4": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }],
            "11": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }],
            "16": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "11am - 12am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }],
            "18": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "11am - 12am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }],
            "24": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }]
        },
        "July": {
            "22": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }],
            "23": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "11am - 12am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }],
            "24": [{
                "time": "8am - 9am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                },
                {
                "time": "9am - 10am",
                "name": "john doe",
                "email": "jd@gmail.com",
                "telephone": "0792549422"
                }]
        }
    }
};
**/
        //alert(bookedDays);

        // Initialize current date
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        /**
         * Displays a custom message box with the given message.
         * @param {string} message - The message to display.
         */
        /**function showMessageBox(message) {
            messageText.textContent = message;
            messageBox.style.display = 'block';
        }**/
       function showMessageBox(message, appDate) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"];
        let myApp = document.getElementById("bookAppointment");
        let appYear = appDate.getFullYear();
        let appMonth = appDate.getMonth();
        let appDay = appDate.getDate();
        let appMonthStr = monthNames[appMonth];

        let myAppBookArray = [];
        myApp.innerHTML = message +"</br></br>";
        myApp.innerHTML += "Select a time for your appointment";

        //check to see if date is scheduled or booked

            if (typeof bookedDays[appYear] !== "undefined") {
                if(typeof bookedDays[appYear][appMonthStr] !== "undefined") {
                    if(typeof bookedDays[appYear][appMonthStr][appDay] !== "undefined") {
                        let myAppBookJson = bookedDays[appYear][appMonthStr][appDay];
                        for (let k = 0; k < myAppBookJson.length; k++) {
                            myAppBookArray.push(myAppBookJson[k]["time"]);
                        }
                        //alert("month is " + appMonthStr + "day is: " + appDay + "appointmentis madatory");
                        
                    }
                }
            }

        for (var i = 0; i < 3; i++) {
            if (myAppBookArray.includes(availableTimes[i])) {
                myApp.innerHTML += "<a href='#' class='unclickable-day'>"+ availableTimes[i]+" (already booked) </a>";
            }
            else {
                myApp.innerHTML += "<a href='booking.php?id=1&time="+availableTimes[i]+"&day="+appDay+"-"+appMonth+"-"+appYear+"'>"+ availableTimes[i]+"</a>";
            }
        }
        myApp.innerHTML += "<button onclick='disableBox()' id='exitButton'>x</button>";
        myApp.style.display = "block";
        //alert("year is  " + appYear + "month is  " + appMonth + "date is  " + appDay);

       }

        /**
         * Hides the custom message box.
         */
        function hideMessageBox() {
            messageBox.style.display = 'none';
        }

        function disableBox() {
            let myApp = document.getElementById("bookAppointment");
            myApp.style.display = 'none';
        }

        // Event listener for closing the message box
        closeMessageBoxBtn.addEventListener('click', hideMessageBox);

        /**
         * Checks if a given date should be unclickable based on predefined rules.
         * Rules: Weekends (Saturday/Sunday), Mondays, and February 1st are unclickable.
         * @param {Date} date - The date to check.
         * @returns {boolean} - True if the date is unclickable, false otherwise.
         */
        function isDateUnclickable(date, today) {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"];

            
            const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
            const month = date.getMonth(); // 0 = January, 1 = February, etc.
            const dayOfMonth = date.getDate();
            const year = date.getFullYear();

            const thisMonth = monthNames[month];

            if(thisMonth === "May") {
                //console.log("month is " + thisMonth + "day is: " + dayOfMonth);
                //console.log(bookSize);
            }

            //console.log(bookSize)

            //check to see if date is prior to today
            if (year < today.getFullYear()) {
                return true;
            }
            if (year === today.getFullYear() && month < today.getMonth()){
                return true;
            }
            if (year === today.getFullYear() && month === today.getMonth()) {
                if (dayOfMonth < today.getDate()){
                    return true;
                }
            }

            // Check for weekends (Saturday or Sunday)
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                return true;
            }

            // Check for Mondays
            /**
            if (dayOfWeek === 1) {
                return true;
            }
            **/

            // Check for February 1st
            if (month === 1 && dayOfMonth === 1) { // February is month 1 (0-indexed)
                return true;
            }

            //check for days fully booked
            if (typeof bookedDays[year] !== "undefined") {
                if(typeof bookedDays[year][thisMonth] !== "undefined") {
                    if(typeof bookedDays[year][thisMonth][dayOfMonth] !== "undefined") {
                        console.log("month is " + thisMonth + "day is: " + dayOfMonth + "appointmentis madatory");
                        console.log(bookedDays[year][thisMonth][dayOfMonth]);
                        let bookedArray = bookedDays[year][thisMonth][dayOfMonth];
                        if (bookedArray.length === availableTimes.length) {
                            return true;
                        }
                    }
                }
            }

            //bookedDays[year][thisMonth][dayOfMonth]
            //if(bookedDays[year][thisMonth][dayOfMonth] === undefined) {
              //  return false;
            //}


            return false;
        }

        /**
         * Renders the calendar for the given month and year.
         * @param {number} month - The month (0-11).
         * @param {number} year - The full year.
         */
        function renderCalendar(month, year) {
            // Clear previous days
            calendarDaysContainer.innerHTML = '';

            // Set month and year display
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"];
            monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

            // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
            const firstDayOfMonth = new Date(year, month, 1).getDay();
            // Get the number of days in the current month
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Get today's date for highlighting
            const today = new Date();
            const todayDate = today.getDate();
            const todayMonth = today.getMonth();
            const todayYear = today.getFullYear();

            // Add empty cells for the days before the first day of the month
            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyDiv = document.createElement('div');
                calendarDaysContainer.appendChild(emptyDiv);
            }

            // Add cells for each day of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.textContent = day;
                dayDiv.classList.add('p-2', 'rounded-lg', 'font-medium'); // Base classes

                const currentDayDate = new Date(year, month, day);

                // Check if the current day is unclickable
                if (isDateUnclickable(currentDayDate, today)) {
                    dayDiv.classList.add('unclickable-day');
                } else {
                    dayDiv.classList.add('calendar-day', 'text-gray-700'); // Add clickable styles
                    // Add click event listener only if the day is clickable
                    dayDiv.addEventListener('click', () => {
                        showMessageBox(`${currentDayDate.toDateString()}`, currentDayDate);
                    });
                }

                // Highlight the current day (this can still be highlighted even if unclickable)
                if (day === todayDate && month === todayMonth && year === todayYear) {
                    dayDiv.classList.add('current-day');
                }

                calendarDaysContainer.appendChild(dayDiv);
            }
        }

        // Event listeners for month navigation
        prevMonthBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentMonth, currentYear);
        });

        nextMonthBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        });


        
    async function fetchData() {
    // A public API that returns JSON data (e.g., JSONPlaceholder for fake API data)
    const apiUrl = 'https://mfootball.free.nf/DBTest/appoint.php'; // Example: fetching a single todo item

    console.log(`Attempting to fetch data from: ${apiUrl}`);

    try {
        // Use the Fetch API to make a GET request
        const response = await fetch(apiUrl, {
            method: 'GET' // Explicitly specify GET method (it's the default for fetch, but good for clarity)
            /**headers: {
                'Content-Type': 'application/json' // Inform the server we expect JSON
            }**/
        });

        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            // If the response is not OK, throw an error with the status
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        //const data = await response.json();
        const data = await response.text();

        // Display the data in the console
        console.log('--- Data Fetched Successfully ---');
        fetchedDates = data;
        console.log(fetchedDates);
        console.log("THE TYPE IS " + typeof(fetchedDates));

        //parse data into json
        bookedDays = JSON.parse(fetchedDates);

        renderCalendar(currentMonth, currentYear);


        // You can also display specific parts of the data
        //console.log('User ID:', data.userId);
        //console.log('Title:', data.title);
        //console.log('Completed:', data.completed);
        // Get references to DOM elements
        

    } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('--- Error Fetching Data ---');
        console.error('There was a problem with your fetch operation:', error);
    }
    return(fetchedDates);
    }

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// Initial render of the calendar when the page loads
 window.onload = function() {
    fetchData();
};
    
