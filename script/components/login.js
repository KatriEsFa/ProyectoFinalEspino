import { obtainUsers } from "../components/sessioncheck.js";

document.getElementById("iniciarSesionBtn").addEventListener("click", () => {
    console.log("trying")
    let userInHTML = document.getElementById("userName").value;
    let passInHTML = document.getElementById("userPass").value;
    const usersObtained = obtainUsers();

    if ((usersObtained.some((e) => e.userName === userInHTML && e.password === passInHTML))) {
        const logedUser = usersObtained.find((e) => e.userName === userInHTML);
        localStorage.setItem("currentUser", JSON.stringify(logedUser));
        window.location.replace("/sections/userindex.html");
    }
    else {
        document.getElementById("alertSesionFailed").innerHTML = "Los datos ingresados no son correctos, intente nuevamente";

    }
});

