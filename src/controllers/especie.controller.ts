export const getEspecies = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species`)
    .then((response)=> response.json());

    return data;
};