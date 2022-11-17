// =========tick function===========

function addressFunction() {
  if (document.getElementById("check").checked) {
    document.getElementById("ademail").value =
      document.getElementById("email").value;
  } else {
    document.getElementById("ademail").value = "";
  }
}

//========FORM VALIDATION=========

function ValidateFirst() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let website = document.getElementById("website").value;
  let adname = document.getElementById("adname").value;
  let ademail = document.getElementById("ademail").value;
  let admobile = document.getElementById("admobile").value;
  let des = document.getElementById("des").value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name == "") {
    document.getElementById("name1").innerHTML =
      "name field cannot be left empty";
    return false;
  }
  if (!isNaN(name)) {
    document.getElementById("name1").innerHTML = "name cannot be a number";
    return false;
  } else {
    document.getElementById("name1").innerHTML = "";
  }

  if (address == "") {
    document.getElementById("address1").innerHTML =
      "this field cannot be left empty";
    return false;
  } else {
    document.getElementById("address1").innerHTML = "";
  }

  if (!email.match(pattern)) {
    document.getElementById("email1").innerHTML =
      "please enter a valid email address";
    return false;
  } else {
    document.getElementById("email1").innerHTML = "";
  }

  if (website == "") {
    document.getElementById("website1").innerHTML =
      "this field cannot be left empty";
    return false;
  } else {
    document.getElementById("website1").innerHTML = "";
  }
  if (adname == "") {
    document.getElementById("adname1").innerHTML =
      "this field cannot be left empty";
    return false;
  } else {
    document.getElementById("adname1").innerHTML = "";
  }
  if (ademail == "") {
    document.getElementById("ademail1").innerHTML =
      "this field cannot be left empty";
    return false;
  } else {
    document.getElementById("ademail1").innerHTML = "";
  }
  if (admobile == 0) {
    document.getElementById("admobile1").innerHTML =
      "this field cannot be left empty";
    return false;
  } else {
    document.getElementById("admobile1").innerHTML = "";
  }
  if (isNaN(admobile)) {
    document.getElementById("admobile1").innerHTML =
      "please enter a valid number";
    return false;
  }
  if (admobile.length != 10) {
    document.getElementById("admobile1").innerHTML =
      "Please enter a valid phone number";
    return false;
  } else {
    document.getElementById("admobile1").innerHTML = "";
  }
  if (des == "") {
    document.getElementById("des1").innerHTML =
      "this field cannot be left empty";
    return false;
  } else {
    document.getElementById("des1").innerHTML = "";
  }
  if (des.length > 250) {
    document.getElementById("des1").innerHTML =
      "cannot have more than 250 characters";
    return false;
  }
}

function ValidateNew() {
  var a = document.getElementById("legal");
  var b = document.getElementById("type");
  var c = document.getElementById("date");
  var d = document.getElementById("sector");
  var e = document.getElementById("employee");
  var f = document.getElementById("auditor");
  var g = document.getElementById("opinion");
  var h = document.getElementById("capital");
  var i = document.getElementById("bankrupt");
  var i = document.getElementById("court");
  // var bank = document.forms.RegForm.Bank.value;
  var strUser = a.options[a.selectedIndex].value;
  var strUser1 = b.options[b.selectedIndex].value;
  var strUser2 = c.options[c.selectedIndex].value;
  var strUser3 = d.options[d.selectedIndex].value;
  var strUser4 = e.options[e.selectedIndex].value;
  var strUser5 = f.options[f.selectedIndex].value;
  var strUser6 = g.options[g.selectedIndex].value;
  var strUser7 = h.options[h.selectedIndex].value;
  var strUser8 = i.options[i.selectedIndex].value;

  if (strUser == 0) {
    alert("Please select a legal");
    return false;
  }
  if (strUser1 == 0) {
    alert("Please select a type");
    return false;
  }
  if (strUser2 == 0) {
    alert("Please select a date");
    return false;
  }
  if (strUser3 == 0) {
    alert("Please select a sector");
    return false;
  }
  if (strUser4 == 0) {
    alert("Please select a employee");
    return false;
  }
  if (strUser5 == 0) {
    alert("Please select a auditor");
    return false;
  }
  if (strUser6 == 0) {
    alert("Please select a opinion");
    return false;
  }
  if (strUser7 == 0) {
    alert("Please select a capital");
    return false;
  }
  if (strUser8 == 0) {
    alert("Please select a bankrupt");
    return false;
  }

  localStorage.setItem("legal", legal);
  localStorage.setItem("type", type);
  localStorage.setItem("date", date);
  localStorage.setItem("sector", sector);
  localStorage.setItem("employee", employee);
  localStorage.setItem("auditor", auditor);
  localStorage.setItem("opinion", opinion);
  localStorage.setItem("capital", capital);
  localStorage.setItem("employee", employee);
  localStorage.setItem("debt", debt);
}

// image preview
function previewBeforeUpload(id) {
  document.querySelector("#" + id).addEventListener("change", function (e) {
    if (e.target.files.length == 0) {
      return;
    }
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    document.querySelector("#" + id + "-preview div").innerText = file.name;
    document.querySelector("#" + id + "-preview img").src = url;
  });
}

let a = document.getElementById("previmg");

var inputFile = document.getElementById("inputFile");
function removeImg() {
  a.src = "";
  inputFile.value = "";
}

previewBeforeUpload("file-1");

//image reading and deletion

function readURL(input, imgControlName) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(imgControlName).attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

$("#imag").change(function () {
  // add your logic to decide which image control you'll use
  var imgControlName = "#ImgPreview";
  readURL(this, imgControlName);
  $(".preview1").addClass("it");
  $(".btn-rmv1").addClass("rmv");
});

$("#removeImage1").click(function (e) {
  e.preventDefault();
  $("#imag").val("");
  $("#ImgPreview").attr("src", "");
  $(".preview1").removeClass("it");
  $(".btn-rmv1").removeClass("rmv");
});

// ========FORM HIDING==========

function myFunction() {
  var x = document.getElementById("myform");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
window.onload = function () {
  document.getElementById("myform2").style.display = "block";
};
