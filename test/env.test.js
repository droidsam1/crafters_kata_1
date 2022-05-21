const primos = require('../src/primos');


test('testing jest enviroment is up and running', ()=> {
	expect(1).toBe(1);
});

test('primos returns an empty array for 1', ()=> {
	expect(primos(1)).toEqual([]);
});

test('primos returns an array with a 2', ()=> {
	expect(primos(2)).toEqual([2]);
});

test('primos returns an array with a 3', ()=> {
	expect(primos(3)).toEqual([3]);
});

test('primos returns an array with a 2,2', ()=> {
	expect(primos(4)).toEqual([2,2]);
});