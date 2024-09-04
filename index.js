const btn = document.getElementById("submit-btn");
const addCourseBtn = document.getElementById("add-btn");
const courseForm = document.getElementById("course-form");
const gp = document.getElementById("gp");
const overallCgpaBox = document.getElementById("overall-cgpa");
const currentCgpaInput = document.getElementById("current-cgpa");
const completedCreditsInput = document.getElementById("completed-credits");

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

    calculateGP(data);
});

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

    // Calculate overall CGPA
    let currentCgpa = parseFloat(currentCgpaInput.value);
    let completedCredits = parseFloat(completedCreditsInput.value);
    let overallCgpa = ((currentCgpa * completedCredits) + (newGPA * totalUnits)) / (completedCredits + totalUnits);

    overallCgpaBox.textContent = `CGPA: ${overallCgpa.toFixed(2)}`;
}

function removeChild(self) {
    if (courseForm.children.length > 1) {
        courseForm.removeChild(self);
    }
}

// Ensure the initial course remove buttons are functional
for (let btn of removeCourseBtns) {
    btn.addEventListener("click", (e) => {
        const self = e.target.closest('.col');
        removeChild(self);
    });
}

