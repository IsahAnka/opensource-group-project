const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error: Cannot divide by zero";
    }
    return x / y;
}

console.log("=== Simple Calculator (Node.js) ===");
console.log("Select operation:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

rl.question("Enter choice (1/2/3/4): ", (choice) => {
    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let result;

            switch (choice) {
                case '1':
                    result = add(num1, num2);
                    console.log(`${num1} + ${num2} = ${result}`);
                    break;
                case '2':
                    result = subtract(num1, num2);
                    console.log(`${num1} - ${num2} = ${result}`);
                    break;
                case '3':
                    result = multiply(num1, num2);
                    console.log(`${num1} * ${num2} = ${result}`);
                    break;
                case '4':
                    result = divide(num1, num2);
                    console.log(`${num1} / ${num2} = ${result}`);
                    break;
                default:
                    console.log("Invalid input");
            }
            rl.close();
        });
    });
});
