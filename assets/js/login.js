let cl = console.log;

const loginForm = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginFornCheck = document.getElementById('loginFornCheck');
const eye = document.getElementById("eye");
const eyeClose = document.getElementById("eyeClose");

let db =[
    {
        email : "sureshpawar3252@gmail.com",
        password: "zaq1ZAQ!"
    },
    {
        email : "sureshpawar123@gmail.com",
        password: "123321"
    },
    {
        email : "sureshpawar@gmail.com",
        password: "987456321"
    }
]

//Arrow Function 
const onLoginForm =(eve)=>{
    eve.preventDefault();
    setTimeout(() => {

        let emailValue = email.value;
        let passwordValue = password.value;
        let isEmailExist;

        db.forEach(acc => {

            if(emailValue === acc.email ){
                isEmailExist = acc;
            }
        });

        // cl(isEmailExist)

        if(isEmailExist){
            //check password
            if(isEmailExist.password === passwordValue){
                redirectDashboard();

            }else {
               
                swal.fire({
                    icon : 'error',
                    title : 'Ooops...',
                    text :'Wrong Password entered'
                })
            }

        }else{
            // alert( `This username does not exist`)

            swal.fire({
                icon : 'error',
                title : 'Ooops...',
                text :'This Username is does not exists..!!!'
            })
            return
        }

    }, 2000);
    
}

function redirectDashboard(){
    cl(`Dashbord Login Successfully`);
    window.location.href = 'dashbord.html'
}


const onClick = (eve) =>{
   if(password.type === "password"){
       password.type = "text";
      eye.classList.add('d-none');
      eyeClose.classList.remove('d-none');
       
   }else{
        password.type= "password"
        eye.classList.remove('d-none');
        // eyeClose.classList.add('d-none');
       
   }
}


//Events 
loginForm.addEventListener('submit',onLoginForm);  //this for the login 

eye.addEventListener('click',onClick)
// eyeClose.addEventListener('click',onClick)















