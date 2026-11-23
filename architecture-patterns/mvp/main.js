import {SquadModel} from "./model.js";import {createView} from "./view.js";import {SquadPresenter} from "./presenter.js";
new SquadPresenter(new SquadModel(),createView());
