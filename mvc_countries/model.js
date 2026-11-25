import { loadData } from "./data.js";

export function makeCountryList() {
  const countries = loadData();
  console.log(countries);
}
