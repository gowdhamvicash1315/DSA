function evenOddArrays(num) {
    const evenArr = [];
    const oddArr = [];
    
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0) {
        evenArr.push(i);
      } else {
        oddArr.push(i);
      }
    }
    
    return {
      Even: evenArr,
      Odd: oddArr
    };
  }
  console.log(evenOddArrays(10));