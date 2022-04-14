import { Usuario } from "../constructors/constructorusuario.js";
import { obtainUsers } from "../components/sessioncheck.js";

document.getElementById("btnFormNewUser").addEventListener("click", () => {
    let newUserName = document.getElementById("newUserName").value;
    let newUserLName = document.getElementById("newUserLName").value;
    let user = newUserName + newUserLName;
    let newUserMail = document.getElementById("newUserMail").value;
    let newUserPass = document.getElementById("newUserPass").value;
    let newUserSpec = document.getElementById("newUserSpec").value;
    let newUserID = usuariosArray.length + 1;
    let newUserPrestamosActuales = [];
    let newUserPrestamosHistoricos = [];



    const newUser = new Usuario(user, newUserID, newUserName, newUserLName, newUserMail, newUserPass, newUserSpec, newUserPrestamosActuales, newUserPrestamosHistoricos);

    const usersObtained = obtainUsers();

    usersObtained.push(newUser);
    localStorage.setItem("usuariosPreCargados", JSON.stringify(usersObtained));
})
//una vez que esto se crea debería re-dirigir a la página de inicio con la parte cargada