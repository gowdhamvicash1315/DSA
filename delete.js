const fs = require('fs');


const emptyData = {};


const jsonString = JSON.stringify(emptyData, null, 2);

fs.writeFileSync('data.json', jsonString);

console.log('Data deleted successfully!');
