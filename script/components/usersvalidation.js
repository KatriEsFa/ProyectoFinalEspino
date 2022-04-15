import { obtainUsers } from "../components/sessioncheck.js";

export function userValidation(user) {
    const users = obtainUsers();
    if (users.some((e) => (e.userName === user.userName) && (e.id != user.id))) {
        return "Ese usuario ya está en uso.";
    }
    // Abajo:> expresión regular que pide minimo 8 caracteres, por lo menos una letra y un número
    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(user.password)) {
        return "La contraseña debe contener al menos 8 caractéres, una letra y un número"
    }
    if (users.some((e) => (e.email === user.email) && (e.id != user.id))) {
        return "Ya ha sido creada una cuenta con ese email";
    }
    return "";
}; 