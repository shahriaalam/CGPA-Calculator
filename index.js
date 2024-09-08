// Select relevant DOM elements
const btn = document.getElementById("submit-btn");
const addCourseBtn = document.getElementById("add-btn");
const courseForm = document.getElementById("course-form");
const gp = document.getElementById("gp");
const overallCgpaBox = document.getElementById("overall-cgpa");
const currentCgpaInput = document.getElementById("current-cgpa");
const completedCreditsInput = document.getElementById("completed-credits");
const statusBox = document.getElementById("status-box"); // Status box for GPA messages

// Event listener for the submit button
btn.addEventListener("click", () => {
    let data = [];

    // Gather form data
    for (let i = 0; i < courseForm.children.length; i++) {
        let col = [];
        const inputs = courseForm.children[i].querySelectorAll("input, select");
        for (let j = 1; j < inputs.length; j++) {
            col.push(inputs[j].value);
        }
        data.push(col);
    }

    calculateGP(data); // Call to calculate GPA and update gauge
});

// Event listener for adding a new course input row
addCourseBtn.addEventListener("click", () => {
    // Create form input row
    const div = document.createElement("div");
    div.className = "col";

    // Create course code input box
    const courseCodeBox = document.createElement("input");
    courseCodeBox.type = "text";
    courseCodeBox.placeholder = "Course Code";

    // Create course unit input box
    const courseUnitBox = document.createElement("input");
    courseUnitBox.type = "number";
    courseUnitBox.placeholder = "Credits";

    // Create grade select input box
    const select = document.createElement("select");
    select.innerHTML = `
      <option value="A+">A+</option>
      <option value="A">A</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="B-">B-</option>
      <option value="C+">C+</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="F">F</option>
    `;

    // Create remove course button
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-course";
    removeBtn.innerHTML = `<i class="fa fa-times"></i>`;
    removeBtn.addEventListener("click", (e) => {
        const self = e.target.closest('.col');
        removeChild(self);
    });

    // Add input boxes to row
    div.appendChild(courseCodeBox);
    div.appendChild(courseUnitBox);
    div.appendChild(select);
    div.appendChild(removeBtn);

    // Add row div to form
    courseForm.appendChild(div);
});

// Function to calculate GPA and CGPA
function calculateGP(data) {
    const gradeMapping = {
        "A+": 4.00,
        "A": 3.75,
        "A-": 3.50,
        "B+": 3.25,
        "B": 3.00,
        "B-": 2.75,
        "C+": 2.50,
        "C": 2.25,
        "D": 2.00,
        "F": 0
    };
    let totalUnits = 0;
    let cummPoints = 0;

    for (let value of data) {
        let [unit, grade] = value;
        unit = Number(unit);
        totalUnits += unit;
        cummPoints += gradeMapping[grade] * unit;
    }
    let newGPA = cummPoints / totalUnits;
    gp.textContent = `GPA: ${newGPA.toFixed(2)}`;

    // Determine and display status based on GPA value
    let status = "";
    if (newGPA >= 4) {
        status = "Excellent";
    } else if (newGPA >= 3.75) {
        status = "Very Good";
    } else if (newGPA >= 3.50) {
        status = "Good";
    }else if (newGPA >= 3.00) {
        status = "Averange";
    } else if (newGPA >= 2.50) {
        status = "Poor";
    }else if (newGPA >= 2.00) {
        status = "Bad";
    }  else {
        status = "Very Bad";
    }
    statusBox.textContent = `${status}`; // Display the status message

    // Calculate overall CGPA
    let currentCgpa = parseFloat(currentCgpaInput.value);
    let completedCredits = parseFloat(completedCreditsInput.value);
    let overallCgpa = ((currentCgpa * completedCredits) + (newGPA * totalUnits)) / (completedCredits + totalUnits);

    overallCgpaBox.textContent = `CGPA: ${overallCgpa.toFixed(2)}`;

    // Map GPA to a custom gauge percentage and update the gauge
    let gpaPercentage = mapGpaToGauge(newGPA); // Custom mapping function
    const gaugeMeter = document.querySelector(".gauge-box");
    GaugeChart_SetPercent(gaugeMeter, gpaPercentage); // Pass the mapped gauge percentage
}

// Custom function to map GPA to the gauge meter
function mapGpaToGauge(gpa) {
    if (gpa >= 4) {
        return 100;  // Excellent
    } else if (gpa >= 3.90) {
        return 95;   // Very Good
    } else if (gpa >= 3.80) {
        return 88;   // Very Good
    } else if (gpa >= 3.75) {
        return 80;   // Very Good
    } else if (gpa >= 3.50) {
        return 75;   // Good
    } else if (gpa >= 3.30) {
        return 65;   // Good
    } else if (gpa >= 3.00) {
        return 55;   // Good
    } else if (gpa >= 2.75) {
        return 50;   // Average
    } else if (gpa >= 2.50) {
        return 40;   // Average
    } else if (gpa >= 2.30) {
        return 30;   // Average
    } else if (gpa >= 2.00) {
        return 25;   // Poor
    } else {
        return 0;    // Very Bad
    }
}

// Update the gauge pointer based on GPA percentage
function GaugeChart_SetPercent(el, _perc) {
    el.dataset.percent = _perc;  // Update the gauge meter with new percent value
    GaugeChart_Animate(el);      // Reanimate the pointer based on new percent value
}

// Function to animate the gauge pointer
function GaugeChart_Animate(el) {
    var pointer = el.querySelector(".pointer");
    if (!pointer) return;

    var percent_deg = 1.8; // Degree of movement per percent
    var _perc = parseInt(el.dataset.percent);
    var percent_deg_style = _perc * percent_deg - 90;

    if (percent_deg_style < -90) percent_deg_style = -90;
    if (percent_deg_style > 90) percent_deg_style = 90;

    pointer.style.transform = `rotateZ(${percent_deg_style}deg)`;

    // Change color or flame gauge effect based on high GPA
    if (_perc >= 87.5) {
        el.querySelector(".flame-gauge").classList.add("active");
    } else {
        el.querySelector(".flame-gauge").classList.remove("active");
    }
}

// Function to remove a course row
function removeChild(self) {
    if (courseForm.children.length > 1) {
        courseForm.removeChild(self);
    }
}

// Ensure the initial course remove buttons are functional
document.querySelectorAll(".remove-course").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const self = e.target.closest('.col');
        removeChild(self);
    });
});

// Initialize gauge behavior
GaugeChart_BehaviorInit();
