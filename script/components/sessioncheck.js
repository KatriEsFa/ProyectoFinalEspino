import { usuariosArray } from "../data/usuariosarray.js";

export function obtainUsers() {

    let result = [];
    const usuariosArrayJSON = localStorage.getItem("usuariosPreCargados");

    if (usuariosArrayJSON != undefined) {
        result = JSON.parse(usuariosArrayJSON);
    } else {
        result = usuariosArray
    }
    return result;
}

export function obtainCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
};
