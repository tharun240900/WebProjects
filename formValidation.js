
const form = document.querySelector('form');
const pass = document.getElementById('pass');
const cnfPass = document.getElementById('cnfPass');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

pass.addEventListener('change', () => {
    if (!pattern.test(pass.value)) pass.setCustomValidity('please fill this');
    else pass.setCustomValidity('');
})

cnfPass.addEventListener('change', () => {
    if (cnfPass.value == pass.value) cnfPass.setCustomValidity('');
    else cnfPass.setCustomValidity('please fill this');
})

fname.addEventListener('change', function () {
    if (fname.value == '') fname.setCustomValidity('Please fill this');
    else fname.setCustomValidity('');
})
lname.addEventListener('change', function () {
    if (lname.value == '') lname.setCustomValidity('Please fill this');
    else lname.setCustomValidity('');
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (fname.value == '' || lname.value == '' || pass.value == '' || cnfPass.value == '') {
        if (fname.value == '') fname.setCustomValidity('Please fill this');
        else if (lname.value == '') lname.setCustomValidity('Please fill this');
        else if (pass.value == '') pass.setCustomValidity('please fill this');
        else if (cnfPass.value == '') cnfPass.setCustomValidity('Please fill this');
    }
    else {
        console.log(fname.value + " " + lname.value);
        console.log(pass.value)
    }
})
