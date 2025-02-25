// BMI CALCULATOR USING INQUIRER PROMT
import inquirer from "inquirer";
const questions = [
    { type: 'number', name: 'weight', message: 'weight(kg):' },
    { type: 'number', name: 'height', message: 'height(m):' },
];
const calculateBMI = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    console.log(`BMI: ${calculateBMI(weight, height).toFixed(2)}`);
};
main();
