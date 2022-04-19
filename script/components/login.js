import { obtainUsers } from "../components/sessioncheck.js";
import { setCurrentUser } from "../components/setcurrentuser";

document.getElementById("iniciarSesionBtn").addEventListener("click", () => {
    let userInHTML = document.getElementById("userName").value;
    let passInHTML = document.getElementById("userPass").value;
    const usersObtained = obtainUsers();

    if ((usersObtained.some(({ userName, password }) => userName === userInHTML && password === passInHTML))) {
        const logedUser = usersObtained.find(({ userName }) => userName === userInHTML);
        setCurrentUser(logedUser);
        window.location.replace("/sections/userindex.html");
    }
    else {
        document.getElementById("alertSesionFailed").innerHTML = "Los datos ingresados no son correctos, intente nuevamente";

    }
});

