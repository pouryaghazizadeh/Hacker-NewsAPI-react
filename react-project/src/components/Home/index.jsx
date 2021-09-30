import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  // this state for get all 500 ids
  const [data, setData] = useState([]);
  // this function get all500 ids and pass them to empty array by usestate
  const fetchData = async () => {
    try {
      const responceData = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      setData(responceData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(
    () => {
      fetchData();
    }, // eslint-disable-next-line
    []
  );

  // make randum number for slice array
  const randumNumber = Math.floor(Math.random() * 490) + 1;
  // slice array for get 10 randumize ids in array 
  const newRandumData = data.slice(randumNumber, randumNumber + 10);

  console.log(newRandumData);
// make array for get value after map on newRandumData
const value = []
const a = []
// map array of ids for get data
useEffect(()=>{
  newRandumData.map((id)=>{

    const getValue = async()=>{
      const objOfValue = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      value.push(objOfValue)
      console.log(value);
     return a.push(value)

    }
    return getValue()

  })

}, // eslint-disable-next-line
[]
)

// console.log(a);

  return <div></div>;
}

export default Home;





  // newRandumData.map((num) => {
  //   return fetch(`https://hacker-news.firebaseio.com/v0/item/${num}.json`)
  //     .then((data) => data.json())
  //     .then((res) => arrOfobj.push(res));
  // });




// useEffect(
//   () => {
//     newRandumData.map((key)=>{
//       return async () => {
//        const er = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${key}.json`)
//        arrOfobj.push(er.data)

//       console.log(er);
//       }

//     })
//   },
//   // eslint-disable-next-line
//   [newRandumData]
//   );
