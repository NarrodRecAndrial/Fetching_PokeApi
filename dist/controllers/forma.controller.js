"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormas = void 0;
const getFormas = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-shape`)
        .then((response) => response.json());
    return data;
};
exports.getFormas = getFormas;
