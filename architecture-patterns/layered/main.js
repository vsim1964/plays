import {SquadRepository} from "./repository.js";import {SquadService} from "./service.js";import {SquadController} from "./controller.js";import {createView} from "./view.js";
new SquadController(new SquadService(new SquadRepository()),createView());
