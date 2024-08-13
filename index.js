const btn = document.getElementById("submit-btn");
const addCourseBtn = document.getElementById("add-btn");
const courseForm = document.getElementById("course-form");
const gp = document.getElementById("gp");
const removeCourseBtns = document.getElementsByClassName("remove-course");


btn.addEventListener("click", () => {
  let data = [];

  // split form data
  for (let i = 0; i < courseForm.length; i += 4) {
    let col = [];
    for (let j = i + 1; j < i + 3; j++) {
      col.push(courseForm[j].value);
    }
    data.push(col);
  }
  calculateGP(data);
});

addCourseBtn.addEventListener("click", () => {
  // create form input row
  const div = document.createElement("div");
  div.className = "col";

  // create course code input box
  const courseCodeBox = document.createElement("input");
  courseCodeBox.type = "text";
  courseCodeBox.placeholder = "Course Code";

  // create course unit input box
  const courseUnitBox = document.createElement("input");
  courseUnitBox.type = "number";
  courseUnitBox.placeholder = "Credits";

  // create grade option boxes
  const optionAA = document.createElement("option");
  optionAA.value = "A+";
  optionAA.textContent = "A+";

  const optionA = document.createElement("option");
  optionA.value = "A";
  optionA.textContent = "A";

  const option_A = document.createElement("option");
  option_A.value = "A-";
  option_A.textContent = "A-";

  const optionBB = document.createElement("option");
  optionBB.value = "B+";
  optionBB.textContent = "B+";

  const optionB = document.createElement("option");
  optionB.value = "B";
  optionB.textContent = "B";

  const option_B = document.createElement("option");
  option_B.value = "B-";
  option_B.textContent = "B-";

  const optionCC = document.createElement("option");
  optionCC.value = "C+";
  optionCC.textContent = "C+";

  const optionC = document.createElement("option");
  optionC.value = "C";
  optionC.textContent = "C";

  const optionD = document.createElement("option");
  optionD.value = "D";
  optionD.textContent = "D";

  const optionF = document.createElement("option");
  optionF.value = "F";
  optionF.textContent = "F";


  // create grade select input box
  const select = document.createElement("select");

  // add options to select box
  select.appendChild(optionAA);
  select.appendChild(optionA);
  select.appendChild(option_A);
  select.appendChild(optionBB);
  select.appendChild(optionB);
  select.appendChild(option_B);
  select.appendChild(optionCC);
  select.appendChild(optionC);
  select.appendChild(optionD);
  select.appendChild(optionF);

  // create remove course button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-course";

  // create remove course icon
  const i = document.createElement("i");
  i.className = "fa fa-times"

  // add remove icon to removeBtn
  removeBtn.appendChild(i);

  removeBtn.addEventListener("click", (e) => {
    const self = e.target;
    removeChild(self);
  });

  // add input boxes to row
  div.appendChild(courseCodeBox);
  div.appendChild(courseUnitBox);
  div.appendChild(select);
  div.appendChild(removeBtn);

  // add row div to form
  courseForm.appendChild(div);
});

function calculateGP(data) {
  /*
      data: An array of arrays; A 2xX array
      */
  const gradeMapping = {
    "A+": 4.00,
    "A": 3.75,
    "A-": 3.50,
    "B+": 3.25,
    "B": 3.00,
    "B-": 2.27,
    "C+": 2.50,
    "C": 2.25,
    "D": 2.00,
    "F": 0
  };
  let totalUnits = 0;
  let cummPoints = 0;

  for (let value of data) {
    let [unit,grade] = value;
    unit = Number(unit);
    totalUnits += unit;
    cummPoints += gradeMapping[grade] * unit;
  }
  let cgpa = cummPoints / totalUnits;
  gp.textContent = `GPA: ${cgpa.toFixed(2)}`
}

for (let btn of removeCourseBtns) {
  btn.addEventListener("click", (e) => {
    const self = e.target
    removeChild(self);
  });
}

function removeChild(self) {
  if (removeCourseBtns.length > 1) {
    if (self.parentElement.localName == "div") {
      courseForm.removeChild(self.parentElement);
    } else {
      courseForm.removeChild(self.parentElement.parentElement);
    }
  }
}