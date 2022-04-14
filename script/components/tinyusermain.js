//presonality Components
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("userNameTiny").innerHTML = currentUser.nombre + " " + currentUser.apellido;
document.getElementById("userRolTiny").innerHTML = currentUser.especialidad;


//log out function
document.getElementById("logOutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser")
    window.location.replace("/index.html");
})

