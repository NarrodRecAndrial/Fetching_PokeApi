"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const especie_controller_1 = require("./controllers/especie.controller");
const forma_controller_1 = require("./controllers/forma.controller");
const habilidad_controller_1 = require("./controllers/habilidad.controller");
const viewData = async () => {
    const espec = await (0, especie_controller_1.getEspecies)();
    const ability = await (0, habilidad_controller_1.getHabilidad)();
    const forms = await (0, forma_controller_1.getFormas)();
    console.log(espec, ability, forms);
};
viewData();
