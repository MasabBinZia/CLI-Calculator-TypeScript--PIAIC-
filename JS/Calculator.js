#! /usr/bin/env node
import inquirer from "inquirer";
import { add } from "./Addition.js";
import { sub } from "./Subtraction.js";
import { mul } from "./Multiplication.js";
import { div } from "./Division.js";
const Calculator = () => {
    const Question = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "operator",
                message: "Choose Your Desired Operator",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"]
            },
            {
                type: "number",
                name: "num1",
                message: "Enter your First Number "
            },
            {
                type: "number",
                name: "num2",
                message: "Enter your Second Number "
            },
        ])
            .then((answers) => {
            if (answers.operator === "Addition") {
                const addresult = add(answers.num1, answers.num2);
                console.log(`${answers.num1}  +  ${answers.num2}  = ${addresult}`);
            }
            else if (answers.operator === "Subtraction") {
                const subresult = sub(answers.num1, answers.num2);
                console.log(`${answers.num1}  -  ${answers.num2} =  ${subresult}`);
            }
            else if (answers.operator === "Multiplication") {
                const mulresult = mul(answers.num1, answers.num2);
                console.log(`${answers.num1}  *  ${answers.num2} = ${mulresult}`);
            }
            else if (answers.operator === "Division") {
                const divresult = div(answers.num1, answers.num2);
                console.log(`${answers.num1}  /  ${answers.num2} = ${divresult}`);
            }
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "continue",
                    message: "Do you want to perform another calculation?"
                }
            ]).then((answer) => {
                if (answer.continue) {
                    Question();
                }
                else {
                    console.log("Thank you for using the calculator. Goodbye!");
                    
                }
            });
        });
    };
    Question();
};
Calculator();
