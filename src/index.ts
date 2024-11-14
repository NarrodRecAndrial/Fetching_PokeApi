import { getEspecies } from "./controllers/especie.controller"
import { getFormas } from "./controllers/forma.controller";
import { getHabilidad } from "./controllers/habilidad.controller";
import { Especie } from "./interfaces/especie.interface";
import { Forms } from "./interfaces/forma.interface";
import { Ability } from "./interfaces/habilidad.interface";

const viewData = async () => {
    const espec: Especie [] = await getEspecies();
    const ability: Ability [] = await getHabilidad();
    const forms: Forms [] = await getFormas();

    console.log(espec, ability, forms);
};

viewData();