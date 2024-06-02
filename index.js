import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence?",
    },
]);
let response = answers.sentence.trim().split(" ");
console.log(response);
console.log(`Your Words Count is ${response.length}`);
