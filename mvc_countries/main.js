import { loadCountries } from "./data.js";

import { setCountries, getCountries } from "./model.js";

const data = await loadCountries();

setCountries(data);

const countries = getCountries();

console.log(countries);
