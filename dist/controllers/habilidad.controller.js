"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHabilidad = void 0;
const getHabilidad = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/ability`)
        .then((response) => response.json());
    return data;
};
exports.getHabilidad = getHabilidad;
