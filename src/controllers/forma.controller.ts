export const getFormas = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-shape`)
    .then((response)=> response.json());

    return data;
};