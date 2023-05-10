(function() {
  $('form > input').keyup(function() {

      var empty = false;
      $('form > input').each(function() {
          if ($(this).val() == '') {
              empty = true;
          }
      });

      if (empty) {
          $('#loginBtn').attr('disabled', 'disabled'); 
      } else {
          $('#loginBtn').removeAttr('disabled'); 
      }
  });
})()

function getBooks() {
  fetch(`http://localhost:8000/book`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      insertNewRecordFromDB(data);
    })
.catch(function(err) {
    console.info(err);
});
}

function checkUser() {
  let loginName = document.getElementById('user_input').value;
  let loginPassword = document.getElementById('pass_input').value;
  fetch(`http://localhost:8000/user/${loginName}/${loginPassword}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  })
    .then(response => response.json())
    .then(response => response[0]?toogleChecks(true,response[0]):toogleChecks(false,response[0]))
.catch(function(err) {
    console.info(err );
});
}


function toogleChecks(isValid,response){
  if(isValid && response.type==='Administrador'){
    document.getElementById('admin_link').style.display="block";
    document.getElementById('admin_link_alert').style.display="none";
  }else{
    document.getElementById('admin_link').style.display="none";
    document.getElementById('admin_link_alert').style.display="block";
  }
}

  function createBook(formData) {
    fetch('http://localhost:8000/book', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        "isbn": formData.isbn,
        "title": formData.title,
        "stock": formData.stock,
        "sales": formData.sales,
        "price": formData.price,
        "lang": formData.lang,
        "category_id": formData.category_id,
        "author_id": formData.author_id
      })
    })
      .then(response => response.json())
  }

  function updateFromDB(td,formData) {
    let id = parseInt(td)
    fetch(`http://localhost:8000/book/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        "isbn": formData.isbn,
        "title": formData.title,
        "stock": formData.stock,
        "sales": formData.sales,
        "price": formData.price,
        "lang": formData.lang,
        "category_id": formData.category_id,
        "author_id": formData.author_id
      })
    })
      .then(response => response.json())
  }


  function deleteFromDB(td){
    let id = td.parentElement.parentElement.innerHTML.split('<td>')[1].split('</td>')[0];
    fetch(`http://localhost:8000/book/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => response.json())
  }

var selectedRow = null

function onFormSubmit() {
    if (validate() && validatePass() && validatestock()) {
        var formData = readFormData();
        if (selectedRow == null){
            createBook(formData);
            getBooks()
        }
        
        else{
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["isbn"] = document.getElementById("isbn").value;
    formData["title"] = document.getElementById("title").value;
    formData["stock"] = document.getElementById("stock").value;
    formData["sales"] = document.getElementById("sales").value;
    formData["price"] = document.getElementById("price").value;
    formData["lang"] = document.getElementById("lang").value;
    formData["category_id"] = document.getElementById("category_id").value;
    formData["author_id"] = document.getElementById("author_id").value;
    return formData;
}

function insertNewRecordFromDB(data) {
  document.getElementById("bookList").getElementsByTagName('tbody')[0].replaceChildren();
  var table = document.getElementById("bookList").getElementsByTagName('tbody')[0];
  for (var i = 0; i < data.length; i++) {
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data[i].isbn;
  cell1.style="text-align:center";
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data[i].title;
  cell2.style="text-align:center";
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data[i].stock;
  cell3.style="text-align:center";
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data[i].sales;
  cell4.style="text-align:center";
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data[i].price;
  cell5.style="text-align:center";
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data[i].lang;
  cell6.style="text-align:center";
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data[i].category_id;
  cell7.style="text-align:center";
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data[i].author_id;
  cell8.style="text-align:center";
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = `<button onClick="onEdit(this)" class="btn" style="background:#6b9080;color:white"><a style="
  display: block;
    color: inherit;
    text-decoration: inherit;
  " href="#upward-form">Edit</a></button>
                     <button onClick="onDelete(this)" class="btn" style="background:#90323d;color:white">Delete</button>`;
  }
}

function resetForm() {
    document.getElementById("isbn").value = "";
    document.getElementById("title").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("sales").value = "";
    document.getElementById("price").value = "";
    document.getElementById("lang").value = "";
    document.getElementById("category_id").value = "";
    document.getElementById("author_id").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("isbn").value = selectedRow.cells[0].innerHTML;
    document.getElementById("title").value = selectedRow.cells[1].innerHTML;
    document.getElementById("stock").value = selectedRow.cells[2].innerHTML;
    document.getElementById("sales").value = selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = selectedRow.cells[4].innerHTML;
    document.getElementById("lang").value = selectedRow.cells[5].innerHTML;
    document.getElementById("category_id").value = selectedRow.cells[6].innerHTML;
    document.getElementById("author_id").value = selectedRow.cells[7].innerHTML;
    localStorage.setItem('editValue', td.parentElement.parentElement.innerHTML.split('<td>')[1].split('</td>')[0]);
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.isbn;
    selectedRow.cells[1].innerHTML = formData.title;
    selectedRow.cells[2].innerHTML = formData.stock;
    selectedRow.cells[3].innerHTML = formData.sales;
    selectedRow.cells[4].innerHTML = formData.price;
    selectedRow.cells[5].innerHTML = formData.lang;
    selectedRow.cells[6].innerHTML = formData.category_id;
    selectedRow.cells[7].innerHTML = formData.author_id;
    let td = localStorage.getItem('editValue');
    updateFromDB(td,formData);
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookList").deleteRow(row.rowIndex);
        deleteFromDB(td);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("isbn").value == "") {
        isValid = false;
        document.getElementById("isbnValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("isbnValidationError").classList.contains("hide"))
            document.getElementById("isbnValidationError").classList.add("hide");
    }
    return isValid;
}

function validatePass() {
  isValid = true;
  if (document.getElementById("title").value == "") {
      isValid = false;
      document.getElementById("titleValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("titleValidationError").classList.contains("hide"))
          document.getElementById("titleValidationError").classList.add("hide");
  }
  return isValid;
}

function validatestock() {
  isValid = true;
  if (document.getElementById("stock").value == "") {
      isValid = false;
      document.getElementById("stockValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("stockValidationError").classList.contains("hide"))
          document.getElementById("stockValidationError").classList.add("hide");
  }
  return isValid;
}

function tempAlert(msg,duration)
{
     var el = document.createElement("div");
     el.setAttribute("style","position:absolute;top:40%;left:41%;background-color:white;width:20em;border-radius:25px;text-align:center;color:white");
     el.innerHTML = msg;
     el.style.background = "green";
     setTimeout(function(){
      el.parentNode.removeChild(el);
     },duration);
     document.body.appendChild(el);
}

var d = document.getElementById('modalButton');
d.onclick = function(){ tempAlert("Success!!",4000); };