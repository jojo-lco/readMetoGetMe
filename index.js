const inquirer = require("inquirer");
const fs = require("fs");
let generatemarkDown = require("./utils/generateMarkdown");
const questions = [];
const createQuestions = function (option1, option2, option3) {
    class Question {
        constructor(type, name, message) {
            this.type = type;
            this.name = name;
            this.message = message;
        }
    }
    const questionObject = new Question(option1, option2, option3);
    questions.push(questionObject);
};
createQuestions("input", "title", "What is the name of this application?");
createQuestions("input", "name", "What is your Github username?");
createQuestions("input", "description", "Write a description for this application");
createQuestions("input", "technologies", "What are the technologies used for this application?");
createQuestions("input", "installation", "How does a user install this application?");
createQuestions("input", "usage", "What is the usage of this application?");
createQuestions("input", "contributing", "Would you like your users to be able to report issues or contribute to this project?");
createQuestions("input", "license", "What license would you like to use?(Ex: MIT, GPL 3.0) If you do not wish to use one type 'none' ");
createQuestions("input", "sources", "Who else contributed to this application?If none type 'none' ");
createQuestions("input", "profile picture", "Would you like to provide a profile picture for your Github account?");
createQuestions("input", "email", "Would you like to provide the email linked to your Github account");
inquirer.prompt(questions).then(function (answers) {
    let markDown = generatemarkDown(answers);
    fs.writeFileSync("README.md", markDown);
});