function button(){
    var username = document.getElementById("user").value; 
    var password = document.getElementById("lösenord").value;

    var accounts = JSON.parse(localStorage.getItem("accounts"))

    var same = false
    for(i = 0; i < accounts.length; i++){
        if (username == accounts[i].username ){
            same = true
            i = accounts.length
        }
    }     
    if (same) {
        alert("Account already exists");
    }else {
        alert("Account succesfully created")
        accounts.push({
            username: username,
            password: password
        })
        localStorage.setItem("accounts", JSON.stringify(accounts))
        window.location.href = "start.html";
    }
}
