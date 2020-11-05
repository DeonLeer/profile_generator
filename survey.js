const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('What\'s your name? ', (answer) => {
  answers.push(answer);
  rl.question('What activity do you like doing?', (answer) => {
    answers.push(answer);
    rl.question('What do you listen to while doing that?', (answer) => {
      answers.push(answer);
      rl.question('Which meal is your favourite', (answer) => {
        answers.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal', (answer) => {
          answers.push(answer);
          rl.question('What is your favorite sport?', (answer) => {
            answers.push(answer);
            rl.question('What is your superpower?', (answer) => {
              answers.push(answer);
              rl.close();
              console.log(`${answers[0]} likes to ${answers[1]} while listening to ${answers[2]}. Their favorite meal is ${answers[4]} for ${answers[3]}. Their favorite sport is ${answers[5]} and their superpower is ${answers[6]}`);
            })
          })
        })
      })
    })
  })
});