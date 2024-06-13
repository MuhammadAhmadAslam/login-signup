let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let mobileNumber = document.getElementById('mobileNumber')
let password = document.getElementById('password')
let SignUpButton = document.getElementById('SignUpButton')


SignUpButton.addEventListener('click', function (event) {
    let StoredUserName = localStorage.setItem('User Name' , userName.value)
    let StoredEmail = localStorage.setItem('User Email' , userEmail.value)
    let StoredMobileNumber = localStorage.setItem('Mobile Number' , mobileNumber.value)
    let StoredPassword = localStorage.setItem('Password' , password.value)
    event.preventDefault()
    userEmail.value = ''
    userName.value = ''
    mobileNumber.value = ''
    password.value = ''
    window.open('assets/login.html' , '_blank');
    // window.location.assign('assets/login.html')
    console.log(true)
})


let loginButton = document.getElementById('loginButton')
loginButton.addEventListener('click', (event) => {
        event.preventDefault()
        if (StoredEmail == userEmail.value && StoredPassword == password) {
            console.log(true);
        }
})

console.log(localStorage.getItem('User Name'));


