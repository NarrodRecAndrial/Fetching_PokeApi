"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEspecies = void 0;
const getEspecies = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species`)
        .then((response) => response.json());
    return data;
};
exports.getEspecies = getEspecies;
