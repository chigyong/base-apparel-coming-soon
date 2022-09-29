function validateEmail(){

    var input = document.getElementById('email').value;
    

    if(input == '@') {
        document.getElementById('message1').innerHTML = "Valid Email";
    }
    else {
        document.getElementById('message2').innerHTML = "Invalid Email!";
    }
}