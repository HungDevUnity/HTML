let employees = [];
let currentId = 1;

const form = document.getElementById("employeeForm");
const tableBody = document.querySelector("#employeeTable tbody");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("employeeId").value;
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const position = document.getElementById("position").value;
  const note = document.getElementById("note").value.trim();

  if (!name) {
    alert("Vui lòng nhập họ tên!");
    return;
  }

  if (id) {
    const emp = employees.find(emp => emp.id == id);
    emp.name = name;
    emp.age = age;
    emp.gender = gender;
    emp.position = position;
    emp.note = note;
  } else {
    const newEmp = {
      id: currentId++,
      name,
      age,
      gender,
      position,
      note
    };
    employees.push(newEmp);
  }

  renderTable();
  form.reset();
  document.getElementById("employeeId").value = "";
});

function renderTable() {
  tableBody.innerHTML = "";

  employees.forEach((emp, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.gender}</td>
      <td>${emp.position}</td>
      <td>${emp.note}</td>
      <td>
        <button onclick="editEmployee(${emp.id})">Sửa</button>
        <button onclick="deleteEmployee(${emp.id})">Xóa</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function editEmployee(id) {
  const emp = employees.find(emp => emp.id == id);
  document.getElementById("employeeId").value = emp.id;
  document.getElementById("name").value = emp.name;
  document.getElementById("age").value = emp.age;
  document.querySelector(`input[name='gender'][value='${emp.gender}']`).checked = true;
  document.getElementById("position").value = emp.position;
  document.getElementById("note").value = emp.note;
}

function deleteEmployee(id) {
  if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
    employees = employees.filter(emp => emp.id != id);
    renderTable();
  }
}
