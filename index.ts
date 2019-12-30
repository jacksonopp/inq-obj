import * as inq from "inquirer";
import * as prompts from "./models/Prompts";

const questions = [
   new prompts.Input("color", "what is your favorite color?"),
   new prompts.Input("purpose", "what is your purpose?"),
   new prompts.Input(
      "dove",
      "what is the average speed of a european white dove?"
   ),
   new prompts.List("list", "choose one", ["thing 1", "thing 2", "thing 3"])
];

function run() {
   inq.prompt(questions).then(answers => {
      console.log(answers);
      goAgain();
   });
}
run();

function goAgain() {
   const goAgainQ = new prompts.Confirm("goAgain", "want to go again?", true);
   inq.prompt([goAgainQ]).then(answers => {
      // console.log(answers);
      answers.goAgain && run();
   });
}
