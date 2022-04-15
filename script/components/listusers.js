import { obtainUsers } from "./sessioncheck.js";
import { deleteUser } from "./userdelete.js";


window.addEventListener("DOMContentLoaded", userListViewer);
function userListViewer() {
    const users = obtainUsers();
    for (let i = 0; i <= users.length - 1; i++) {
        let user = users[i];
        let divUser = document.createElement("div");
        divUser.innerHTML =
            `
            <div> ${user.userName} </div> <button id="deleteButton${user.id}">Borrar Usuario</button>
            `
        document.getElementById("usersList").appendChild(divUser);
        document.getElementById("deleteButton" + user.id).addEventListener("click", () => {
            if (confirm(`¿Desea borrar a ${user.userName}?`) == true) {
                deleteUser(user.id);
                location.reload();
            }
        });
    }
}