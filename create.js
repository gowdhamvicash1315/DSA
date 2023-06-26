const fs = require('fs');

//create
const newData = {
  name: 'Gowdham A',
  age: 25,
  email: 'gowdham.s@sgrids.io'
};


const jsonString = JSON.stringify(newData, null, 2);


fs.writeFileSync('data.json', jsonString);

console.log('Data created successfully!');

//Read
const rawData = fs.readFileSync('data.json');
const jsonData = JSON.parse(rawData);

console.log(jsonData);




