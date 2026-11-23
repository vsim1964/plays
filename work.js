import {
	numbers,
	cities,
	mixed,
	products,
	events,
	employees,
	matrix,
	students,
	orders,
	books,
	table
} from "./arrays.js";

const titles = events.map(event => event.title);
console.log(titles);

const authors = books.map(book => book.author.lastName);
console.log(authors);

const data = matrix.map(array => array[0])
console.log(data);

// Перебор элементов


const people = table.forEach(string)
