let sum = 0;
const table = document.getElementById("myTable");
const checkboxR = table.getElementsByTagName("input");
configure();
checked();
let boolean = true;
let check = true;
function checked() {
  for (let i = 0; i < checkboxR.length; i++) {
    const row = checkboxR[i].parentNode.parentNode;
    checkboxR[i].addEventListener("click", () => {
      if (!checkboxR[i].checked) {
        sum--;
        row.style.backgroundColor = "white";
        row.lastElementChild.innerHTML = "";
        row.lastElementChild.previousElementSibling.innerHTML = "";
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hideColumn");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hideColumn");
        row.querySelectorAll("td")[8].classList.add("hideColumn");
        row.querySelectorAll("td")[9].classList.add("hideColumn");
      } else {
        sum++;
        row.style.backgroundColor = "yellow";
        row.lastElementChild.innerHTML = "<td><button onClick='popUpDetails(this)'>Edit</button></td>";
        row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete</button></td>";
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("hideColumn");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("hideColumn");
        row.querySelectorAll("td")[8].classList.remove("hideColumn");
        row.querySelectorAll("td")[9].classList.remove("hideColumn");

      }
    })
  }
}

function deleteRow(row) {
  const studentName = row.parentNode.parentNode.querySelector("td:nth-child(2)").textContent;
  const i = row.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  alert(studentName + " data deleted successfully");
  document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hideColumn");
  document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hideColumn");
  console.log("delete row" + sum)
  console.log("clength:" + checkboxR.length);
  configure();
  checked();
}

function insert() {
  const row = table.insertRow(table.rows.length);

  const rowsum = table.rows.length;
  const columnCheckbox = row.insertCell(0);
  const columnStudent = row.insertCell(1);
  const columnAdvisor = row.insertCell(2);
  const ColumnA = row.insertCell(3);
  const columnS = row.insertCell(4);
  const columnpe = row.insertCell(5);
  const columnCost = row.insertCell(6);
  const columnper = row.insertCell(7);
  const buttondel = row.insertCell(8);
  const btne = row.insertCell(9);
  columnCheckbox.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="display(this)" src="down.png" width="25px" /></td>`;
  columnStudent.innerHTML = `Student ${Math.ceil(rowsum / 2)}`;
  columnAdvisor.innerHTML = `Teacher ${Math.ceil(rowsum / 2)}`;
  ColumnA.innerHTML = "Approved";
  columnS.innerHTML = "Fall";
  columnpe.innerHTML = " TA ";
  columnCost.innerHTML = Math.ceil(Math.random() * 10000);
  columnper.innerHTML = "100%";

  try {
    setTimeout(() => { alert(`Successfully Added Student${Math.ceil(rowsum / 2)}`) }, 100);
  } catch (error) {
    alert("Adding Student${Math.ceil(rowsum / 2)} failed!");
  }
  checked();
  displayAdd();
  configure();
}
window.addEventListener("click", () => {
  let btnSelect = document.getElementById("button");

  if (sum <= 0) {
    btnSelect.style.backgroundColor = "gray";
    btnSelect.style.cursor = "initial";
    btnSelect.style.border = "5px solid gray";
    btnSelect.style.border = "none";
    btnSelect.disabled = true;
  } else {
    btnSelect.style.backgroundColor = "orange";
    btnSelect.style.cursor = "pointer";
    btnSelect.style.border = "5px solid orange";
    btnSelect.disabled = false;
  }
}
)

function display(r) {
  const row = r.parentNode.parentNode;
  const d = row.nextSibling;
  if (!check) {
    d.style.display = "none";
    check = true;
  } else {
    d.style.display = "table-row";
    check = false;
  }
}


function popUpDetails(row) {
  const studentName = row.parentNode.parentNode.querySelector("td:nth-child(2)").textContent;
  const editPopupTitle = "Edit details of " + studentName;
  const editPopupContent =
    "Student Name: " + studentName + "\n" +
    "Advisor: " + row.parentNode.parentNode.querySelector("td:nth-child(3)").textContent + "\n" +
    "Award Status: " + row.parentNode.parentNode.querySelector("td:nth-child(4)").textContent + "\n" +
    "Semester: " + row.parentNode.parentNode.querySelector("td:nth-child(5)").textContent + "\n" +
    "Type: " + row.parentNode.parentNode.querySelector("td:nth-child(6)").textContent + "\n" +
    "Budget: " + row.parentNode.parentNode.querySelector("td:nth-child(7)").textContent + "\n" +
    "Percentage: " + row.parentNode.parentNode.querySelector("td:nth-child(8)").textContent;
  const confirmUpdate = confirm(editPopupTitle + "\n\n" + editPopupContent + "\n\nPress OK to update or Cancel to close.");

  if (confirmUpdate) {
    alert(studentName + " updated successfully");
  }
  checked();
}

function displayAdd() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea")

  row.innerHTML =
    '<td colspan="10"> \
      Advisor:<br /><br /> \
      Award Details<br /> \
      Summer 1-2014(TA)<br /> \
      Budget Number: <br /> \
      Tuition Number: <br /> \
      Comments:<br /><br /><br /> \
      Award Status:<br /><br /><br /> \
    </td>';

  configure();
  checked();
}

function configure() {
  const nameElement = document.getElementById("name");
  const nuidElement = document.getElementById("nuid");
  nameElement.textContent = "Name: Khan Rehan Parvez";
  nuidElement.textContent = "NUID: 002837350";
  let btnSelect = document.getElementById("button");
  var sum = 0;
  for (var i = 0; i < checkboxR.length; i++) {
    var row = checkboxR[i].parentNode.parentNode;
    if (!checkboxR[i].checked) {
      sum++;
      row.querySelectorAll("td")[8].classList.add("hideColumn");
      row.querySelectorAll("td")[9].classList.add("hideColumn");
    }
    if (checkboxR.length === sum) {
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("hideColumn");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("hideColumn");
      btnSelect.style.backgroundColor = "gray";
      btnSelect.style.cursor = "initial";
      btnSelect.style.border = "none";
      btnSelect.disabled = true;
    }
  }
}

function displayDetails(r) {
  const row = r.parentNode.parentNode;
  const d = row.nextSibling.nextSibling;
  if (boolean) {
    d.style.display = "table-row";
    boolean = false;
  } else {
    d.style.display = "none";
    boolean = true;
  }
}










