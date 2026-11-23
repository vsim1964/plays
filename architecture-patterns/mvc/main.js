import {SquadModel} from "./model.js";import {createView} from "./view.js";import {SquadController} from "./controller.js";
new SquadController(new SquadModel(),createView());
