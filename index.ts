#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        choices: ["React JS", "Angular JS", "Vue JS", "Next JS"],
        message: "Which framework of JS is popular for full stack development?"
    },
    {
        type: "list",
        name: "question_2",
        choices: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink and Text Markup Language", "Hyper Transfer Markup Language"],
        message: "What does HTML stand for?"
    },
    {
        type: "list",
        name: "question_3",
        choices: ["Python", "CSS", "Java", "Ruby"],
        message: "Which of the following is not a programming language?"
    },
    {
        type: "list",
        name: "question_4",
        choices: ["France", "Helsinki", "Tokyo", "Karachi"],
        message: "What is the capital of France?"
    },
    {
        type: "list",
        name: "question_5",
        choices: ["Sahara", "Thar", "Thal", "Cholistan"],
        message: "What is the largest desert in the world?"
    },
]);
let score: number = 0;

switch(quiz.question_1){
    case "Next JS":
        console.log(chalk.cyan("Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Incorrect!"));
}
switch(quiz.question_2){
    case "Hyper Text Markup Language":
        console.log(chalk.cyan("Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Incorrect!"));
}
switch(quiz.question_3){
    case "CSS":
        console.log(chalk.cyan("Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Incorrect!"));
}
switch(quiz.question_4){
    case "France":
        console.log(chalk.cyan("Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Incorrect!"));
}
switch(quiz.question_5){
    case "Sahara":
        console.log(chalk.cyan("Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Incorrect!"));
}

console.log(`Score: ${chalk.greenBright(score)}`)