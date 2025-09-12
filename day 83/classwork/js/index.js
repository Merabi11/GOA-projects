import chalk from 'chalk';
import QRCode from 'qrcode';

console.log(chalk.bgBlue.red.bold('hello'));
console.log(chalk.bgRed.green.bold('hello'));
console.log(chalk.bgYellow.blue.bold('hello'));
console.log(chalk.bgGray.yellow.bold('hello'));
console.log(chalk.bgGrey.black.bold('hello'));

const URL = 'https://www.facebook.com/merab.jiqidze';

QRCode.toFile(
  'profile.png',
  URL,
  {
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
    width: 300,
  },
  (err) => {
    if (err) return console.error('Error saving QR:', err);
    console.log(chalk.bgGreen.red.bold('QR Code saved as profile.png✅ '));
  }
);

// package.json
// ეს არის პროექტის მტავარი სამართავი ფაილი რომელიც აღწერს პროეტის ავტორს, ვერსიას, პროექტის სახელს თუ რომელ ბიბლიოთეკას ან მოდულებს იყენებს პროქტი, მოკლედ ეს არის ფაილი სადაც წერია პროექტის შესახებ და მისი საჭიროებების შესახებ და პარამეტრებზე
// ამ ფაილის მეშვეობით ჩვენ ვმართავთ ჩვენს მთლიან პროქტს არამარტო მართვა მასში წერია დეტალური ინფორმაციები

// package-lock.json
// ეს ფაილი ავტომატურად იქმნება როდესაც ჩვენ შევქმნით package.json-ს
// აქ ინახება ყველა ის მოდულები რაც ჩვენ ჩამოვტვირთეთ პროექტში და კიდევ ის ჩამოტვირთული მოდულები თუ კიდევ რამე მოდულებს მოიხმარს
// ეს ფაილი გვეუბნება ყველა იმ გადმოწერილ მოდულებზე ინფორმაციას მაგ: თუ ეს გადმოწერილი მოდლები იყენებს კიდევ სხვა მოდულებს

// node_modules
// ამ ფოლდერში თავს იყრის ყველა ის გადმოწერილი მოდულები
// ამფოლდერში იყრიან თავს

// module
// მოდული არის კოდის პატარა ნაწილი რომელის გამოყენებაც შეგვიძლია ჩვენი პროგრამების სხვადასხვა ნაწილში

// commonJs
// Node.js -ის გზით როდესაც (module.exports/require)-ვაკეთებთ მოდულს და რექვაირედს ამ ყველაფერს მივუთითებთ როგორც commonJs-ით
