let object = {
	a: 'a',
	b: 'b'
}

console.log(object);
delete object.a
console.log(object);
object['a'] = 'a';
console.log(object);

for (let key in object) {
	delete object[key];
	break;
}
console.log(object);