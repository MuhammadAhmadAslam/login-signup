// Select the elements
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let mobileNumber = document.getElementById('mobileNumber');
let password = document.getElementById('password');
let SignUpButton = document.getElementById('SignUpButton');
let loginButton = document.getElementById('loginButton');
let forText = document.getElementById('text')
let loginPasswordInput = document.getElementById('loginPasswordInput')
let LoginEmailInput = document.getElementById('LoginEmailInput')
SignUpButton.addEventListener('click', function (event) {
if (userName.value == '' || userEmail.value == '' || mobileNumber.value == '' || password.value == '') {
    event.preventDefault()
    forText.innerText = 'Please fill in this form'
}else{
        
        localStorage.setItem('User Name', userName.value);
        localStorage.setItem('User Email', userEmail.value);
        localStorage.setItem('Mobile Number', mobileNumber.value);
        localStorage.setItem('Password', password.value);
        userEmail.value = '';
        userName.value = '';
        mobileNumber.value = '';
        password.value = '';
        event.preventDefault();
        window.location.href= 'assets/login.html'
        // window.open('assets/login.html');
        // window.location.assign('assets/login.html');
        console.log('Sign up successful');
    }
});




password.addEventListener('input' , ()=> {
    let num = document.getElementsByClassName('num')
    let upper = document.getElementsByClassName('upper')
    let Special = document.getElementsByClassName('Special')
    let length = document.getElementsByClassName('length')

    let passwordValue = password.value; 
    let symbols = ['!',"@",'#',"%","$","&"]
for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j <= 9; j++) {
    if (passwordValue.length > 12 ||  passwordValue.includes(passwordValue.toUpperCase()) && passwordValue.includes(j.toString()) && passwordValue.includes(symbols[i])) {
            length[0].innerHTML = `<i class="fa-solid fa-circle-check " style="font-size: 14px; color: green; "></i>  Passowrd Length Must Be Greater Than 12 `
         upper[0].innerHTML = `<i class="fa-solid fa-circle-check " style="font-size: 14px; color: green; "></i> Passowrd Must Contain Upper Case Alphabhet (A-Z) `
         num[0].innerHTML = `<i class="fa-solid fa-circle-check " style="font-size: 14px; color: green; "></i> Passowrd Must Contain Number (0-9)`
        Special[0].innerHTML = `<i class="fa-solid fa-circle-check " style="font-size: 14px; color: green; "></i> Passowrd Must Contain Special Character `
    }
}
    }

})

