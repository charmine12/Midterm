

document.getElementById("submit").onclick = function () {

    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var fname = row.insertCell(0);
    var mname = row.insertCell(1);
    var lname = row.insertCell(2);
    var age = row.insertCell(3);
    var gender = row.insertCell(4);
    var birthday = row.insertCell(5);
    var course = row.insertCell(6);
    var year = row.insertCell(7);
    var remove = row.insertCell(8);
    var update = row.insertCell(9);


    fname.innerHTML = document.getElementById("fname").value;
    mname.innerHTML = document.getElementById("mname").value;
    lname.innerHTML = document.getElementById("lname").value;
    age.innerHTML = document.getElementById("age").value;
    gender.innerHTML = document.getElementById("gender").value;
    birthday.innerHTML = document.getElementById("birthday").value;
    course.innerHTML = document.getElementById("course").value;
    year.innerHTML = document.getElementById("year").value;
    remove.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)">';
    update.innerHTML = '<input type="button" value="Update" onclick="updateRow(this)">';

   
    return true;
  }



  function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
  }
  function updateRow(id){
    TmpID - id
    Mode = 'update'
    submit.textContent = "Update"
  }
