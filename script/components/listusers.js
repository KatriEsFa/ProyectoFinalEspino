import { obtainUsers } from "./sessioncheck.js";
import { deleteUser } from "./userdelete.js";


window.addEventListener("DOMContentLoaded", userListViewer);
function userListViewer() {
    const users = obtainUsers();
    for (let i = 0; i <= users.length - 1; i++) {
        const { userName, id } = users[i];
        let divUser = document.createElement("div");
        divUser.innerHTML =
            `
            <div> ${userName} </div> <button id="deleteButton${id}">Borrar Usuario</button>
            `
        document.getElementById("usersList").appendChild(divUser);
        document.getElementById("deleteButton" + id).addEventListener("click", () => {
            if (confirm(`¿Desea borrar a ${userName}?`) == true) {
                deleteUser(id);
                location.reload();
            }
        });
    }
}