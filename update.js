const fs = require('fs');

const rawData = fs.readFileSync('data.json');
const jsonData = JSON.parse(rawData);

jsonData.name = 'Gowdham Aundy';

const updatedJsonString = JSON.stringify(jsonData, null, 2);

fs.writeFileSync('data.json', updatedJsonString);

console.log('Data updated successfully!');

console.log(jsonData);
