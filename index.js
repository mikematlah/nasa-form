const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit',function(event){
   event.preventDefault()
   const loginFormData = new FormData(loginForm)
   const name = loginFormData.get('astronautName')
   const email = loginFormData.get('astronautEmail')
   const password = loginFormData.get('astronautPassword')
   console.log(name)
   console.log(email)
   console.log(password)
})