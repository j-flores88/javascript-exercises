function add (a, b) {
	return (a + b);
}

function subtract (a, b) {
	return (a - b);
}

function sum (input) {
	let sum = 0;

	if(!Array.isArray(input)) {
		return 'Error'
	} else if(input.length === 0) {
		return 0
	} else {
		for(let i = 0; i < input.length; i++) {
      sum += input[i]
		}
	}
  return sum
}

function multiply (input) {
	let result = 1;

	if(!Array.isArray(input)) {
		return 'Error'
	} else if(input.length === 0) {
		return 0
	} else {
		for(let i = 0; i < input.length; i++) {
      result *= input[i]
		}
	}
  return result
}

function power(a, b) {
	return (a**b)
}

function factorial(input) {
	let result = 1;
  
	  while(input > 0) {
	  result *= input
	  input--
	}
	return result
  }

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}