let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

var today = new Date();
currDate.innerText = `Today's Date is : ${today.toLocaleDateString('en-US')}`;

CalcAge.addEventListener("click", () => {
    if (!dateOfBirth.value) {
        alert("Please enter your date of birth!");
        return;
    }

    const birthDate = new Date(dateOfBirth.value);
    const today = new Date();

    if (birthDate > today) {
        alert("Date of birth cannot be in the future!");
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Calculate total values
    let totalMonths = ageYears * 12 + ageMonths;
    let totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    let totalHours = totalDays * 24;
    let totalMinutes = totalHours * 60;
    let totalSeconds = totalMinutes * 60;

    // Adjust days if negative
    if (ageDays < 0) {
        ageMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    // Adjust months if negative
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Format the display text
    let ageText = `
        <div class="age-breakdown">
            <div class="age-item">
                <span class="age-value">${ageYears}</span>
                <span class="age-label">Years</span>
            </div>
            <div class="age-item">
                <span class="age-value">${totalMonths}</span>
                <span class="age-label">Total Months</span>
            </div>
            <div class="age-item">
                <span class="age-value">${totalDays}</span>
                <span class="age-label">Total Days</span>
            </div>
            <div class="age-item">
                <span class="age-value">${totalHours.toLocaleString()}</span>
                <span class="age-label">Total Hours</span>
            </div>
            <div class="age-item">
                <span class="age-value">${totalMinutes.toLocaleString()}</span>
                <span class="age-label">Total Minutes</span>
            </div>
            <div class="age-item">
                <span class="age-value">${totalSeconds.toLocaleString()}</span>
                <span class="age-label">Total Seconds</span>
            </div>
        </div>
    `;

    // Update the display
    displayAge.style.visibility = "visible";
    displayAge.classList.add('show');
    Age.innerHTML = ageText;
    
    // Update the detailed age spans
    years.textContent = ageYears;
    months.textContent = ageMonths;
    days.textContent = ageDays;

    // Add animation class
    displayAge.classList.remove('show');
    void displayAge.offsetWidth;
    displayAge.classList.add('show');
});

document.querySelector('.close-btn').addEventListener('click', () => {
    displayAge.style.visibility = 'hidden';
    displayAge.classList.remove('show');
});

// Add input validation
dateOfBirth.addEventListener('input', (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9/]/g, '');
    if (value.length === 2 || value.length === 5) {
        value += '/';
    }
    e.target.value = value.substring(0, 10);
});