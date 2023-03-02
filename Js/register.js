// Docment object methods elements
const formBox = document.querySelector('.form__box');
const form = document.querySelector(".form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const mobile = document.querySelector(".mobile");
const password = document.querySelector(".password");
const cpassword = document.querySelector(".cpassword")
const message = document.querySelector('small');

// SUCCESS CONTAINER ID GET 

const successContianer = document.querySelector('.success__container');
const nameOutput = document.querySelector('.nameOutput');
const returnHome = document.querySelector('.returneHome');
const heartRain = document.querySelector('.heart_rain');


//  FORM SUBMIT EVENT IS e 

document.getElementsByClassName('form')[0].addEventListener('submit', (e) => {
    e.preventDefault();

    checkValidations();

});


const checkValidations = () => {

    //  TRIM TO REMOVE THE WHITESPACES 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();


    // CHECK THE USERNAME IS  VALID FUNCTONS OR NOT 

    if (usernameValue === '') {
        setError(username, 'Username cannot be blank..!');
    } else {
        setSuccess(username);
    }


    // CHECK THE EMAILID IS  VALID FUNCTONS OR NOT 

    if (emailValue === '') {
        setError(email, 'Email cannot be blank..!')
    } else if (!isEmail(emailValue)) {
        setError(email, 'Not a valid email..!')
    } else {
        setSuccess(email);
    }


    // CHECK THE MOBILE NUMBER IS  VALID FUNCTONS OR NOT 
    
    if (mobileValue === '') {
        setError(mobile, 'Mobile no cannot be blank..!')
    }else if(!isMobile(mobileValue)){
        setError(mobile, 'minimum 10 digits enter')
    }
    
    else {
        setSuccess(mobile)
    }


    // CHECK THE PASSWORD IS  VALID FUNCTONS OR NOT 

    if (passwordValue === '') {
        setError(password, 'Password cannot be blank..!')
    } else if (passwordValue.length < 5) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password)
    }

    // CHECK THE CONFORM PASSWORD IS  VALID FUNCTONS OR NOT 

    if (cpasswordValue == '') {
        setError(cpassword, 'Password cannot be blank..!')
    } else if (cpasswordValue !== passwordValue) {
        setError(cpassword, 'Password does not matched')
    }
    else {
        setSuccess(cpassword);
        correctOutput();
    }
}

// SET THE SUCCESS MESSAGES 

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form__div success"
}

// SET THE ERROR MESSAGES 

function setError(input, err) {
    const formControl = input.parentElement;
    const msg = formControl.querySelector('small')
    formControl.className = "form__div error"
    msg.innerHTML = err;
}

// CHECK THE VALID EMAIL ID EXPRESSION FORMULA 

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// CHECK THE VALID MOBILE NUMBER EXPRESSION FORMULA 

function isMobile(mobile){
    const phoneno = /^\d{10}$/
    return phoneno.test(Number(mobile).toString());
}


// ALL FORM FIELD CORRECT THIS FUNCTION EXECUTE FUNCTIONS HI......

function correctOutput() {
    setInterval(() => {
        formBox.classList.add('active');
        successContianer.classList.add('active');
        nameOutput.innerHTML = `Hi.. ${username.value} 👋🏻`;
    }, 1000);
    setInterval(createHeart, 300);
}

// HOME BUTTON EVENT 

returnHome.addEventListener('click', () => {
    homePage();
})

// WHEN CLICK THE HOME BUTTON FUNCTION WINDOW  BROWSER CAN BE RELOADE RETURN TO THE FORM PAGES 

function homePage() {
    window.location.reload();
}


// REGISTRATION SUCCESSFULL THE FLOWER RAIN FALL... FUNCTIONS 
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = "🌸";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"
    heartRain.appendChild(heart);
}
