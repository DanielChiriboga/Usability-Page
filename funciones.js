//Funciones que cambian los cuadros de Login y SignUp

function LogIn() {
    document.getElementById("content2").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function SignUp() {
    document.getElementById("content").style.display = "none";
    document.getElementById("content2").style.display = "block";
}

//Funciones que permiten ver los caracteres de las contraseñas 

function togglePassword(passId) {
    let pass = document.getElementById(passId);
    let icon = passId === 'loginPass' ? document.getElementById('icon') : document.getElementById('icon2');

    if (pass.type === "password") {
        pass.type = "text";
        icon.textContent = "Ocultar";
        icon.style.color = "grey";
    } else {
        pass.type = "password";
        icon.textContent = "Ver";
        icon.style.color = "grey";
    }
}

//Función para validar el formulario del login

function signup() {
    // Guardar los datos en localStorage
    const signupUsername = document.getElementById('signupUsername').value;
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPass = document.getElementById('signupPass').value;

    localStorage.setItem('signupUsername', signupUsername);
    localStorage.setItem('signupEmail', signupEmail);
    localStorage.setItem('signupPassword', signupPass);

    alert('Signup successful');

    // Limpiar los campos después de realizar la acción
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPass').value = '';
}

function login() {
    const storedUsername = localStorage.getItem('signupUsername');
    const storedEmail = localStorage.getItem('signupEmail');
    const storedPassword = localStorage.getItem('signupPassword');

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPass = document.getElementById('loginPass').value;

    if (loginEmail === storedEmail && loginPass === storedPassword) {
        alert("Login successful\n\nEntrando a la página como " + storedUsername);
    } else {
        alert('Error: Datos incorrectos\n\nIntentelo nuevamente');
    }

    // Limpiar los campos después de realizar la acción
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPass').value = '';
}


function visit(){
    alert('Entrando como visitante\n\nOpciones Limitadas');
}

function forgotPass(){
    alert('Ponganse en contacto con los administradores para recuperar su cuenta');
}