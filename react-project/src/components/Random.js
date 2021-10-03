const Random = responseData => {
    const randomNumber = Math.floor(Math.random() * responseData.length);
    console.log("your random data is",randomNumber);
    return randomNumber;
  };
  
  export default Random;