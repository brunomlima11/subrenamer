const fs = require("fs");
const path = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rootDir = path.dirname(process.execPath);
const targetDirectory = path.join(rootDir, "rename");

var files = [];
files = fs.readdirSync(targetDirectory);
files = files.sort((a, b) => {
  return a.length < b.length ? a.length - b.length : a.localeCompare(b);
});

async function prompt(message) {
  return new Promise((resolve, reject) => {
    let result;
    rl.question(message, (response) => {
      result = response;
      result.replace();
      resolve(result);
    });
  });
}

async function main() {
  const DESIRED_NAME = await prompt("Input the desired series name: \n");
  const STARTING_EPISODE = await prompt(
    "Input the starting episode number: \n"
  );

  if (!DESIRED_NAME) {
    console.log(
      "Input the desired series' name. Ex: node script.js 'Shingeki no Kyojin' 1"
    );
    process.exit(1);
  }
  if (!STARTING_EPISODE) {
    console.log(
      "Input the starting episode number. Ex: node script.js 'Shingeki no Kyojin' 1"
    );
    process.exit(1);
  }

  var EPISODE_COUNT = STARTING_EPISODE;
  console.log("");

  for (const file of files) {
    const fileExtension = file.substring(file.length - 3, file.length);
    const actualFilePath = targetDirectory + `/${file}`;
    console.log(`* ${file}`);
    const newFileName = `${DESIRED_NAME} - ${EPISODE_COUNT}.${fileExtension}`;
    const newFilePath = targetDirectory + `/${newFileName}`;
    console.log(`  '-> ${newFileName}`);
    fs.rename(actualFilePath, newFilePath, (err) => console.log(err));
    EPISODE_COUNT++;
  }

  process.exit(0);
}

main();
