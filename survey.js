const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is ya name????? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
