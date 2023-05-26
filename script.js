var firststart = localStorage.getItem("firststart");
var accounts = [{
  username: "admin",
  password: "123"
}]
if (firststart != 1) {
  localStorage.setItem("accounts", JSON.stringify(accounts))
}
localStorage.setItem("firststart", 1)

function button() {
  var wrong = true
  var accounts = JSON.parse(localStorage.getItem("accounts"))
  var användare = document.getElementById("usr").value
  var lösenord = document.getElementById("password").value;
  for (i = 0; i < accounts.length; i++) {
    if (användare == accounts[i].username && lösenord == accounts[i].password) {
      window.location.href = "start.html";
      wrong = false
    }
  }
  if (wrong) {
    alert("felaktigt lösenord eller användarnamn");
  }
}


