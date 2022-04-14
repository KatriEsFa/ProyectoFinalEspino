import { usuariosArray } from "../data/usuariosarray.js";

export function obtainUsers() {

    const usuariosArrayJSON = localStorage.getItem("usuariosPreCargados");

    if (usuariosArrayJSON != undefined) {
        usuariosArray = JSON.parse(usuariosArrayJSON);
    }
    return usuariosArray;
}