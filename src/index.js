const signForm = document.getElementById('signForm');
const unameField = document.getElementById('uname');
const signersList = document.getElementById('signersSpan')

function sign(e) {
    e.preventDefault();
    signersList.innerHTML += unameField.value;
    signersList.innerHTML += "<br />"
    unameField.value="";
}

document.addEventListener('DOMContentLoaded', function(e) {
    signForm.onsubmit = sign;
});