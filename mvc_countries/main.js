import { loadCountries } from "./data.js";

const countries = await loadCountries();

console.log(countries);
