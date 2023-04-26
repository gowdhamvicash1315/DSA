function firstNonRepeatedChar(str) {
    // create an object to store the frequency of each character in the string
    const charFrequency = {};
  
    // loop through the string and increment the count for each character in the object
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charFrequency[char]) {
        charFrequency[char]++;
      } else {
        charFrequency[char] = 1;
      }
    }
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charFrequency[char] === 1) {
        return char;
      }
    }
    return null;
  }
  const str = 'abacddbec';
  const firstNonRepeated = firstNonRepeatedChar(str);
  console.log(firstNonRepeated); // 'e'