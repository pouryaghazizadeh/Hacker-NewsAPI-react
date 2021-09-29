import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
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
  // make randum number
  const randumNumber = Math.floor(Math.random() * 490) + 1;
  const newRandumData = data.slice(randumNumber, randumNumber + 10);

  const arrOfobj = [];


 
    newRandumData.map((num) => {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${num}.json`)
        .then((data) => data.json())
        .then((res) => arrOfobj.push(res));
    });
  
  // useEffect(()=>{
  // rrr()
  // },
  // // eslint-disable-next-line
  // [])


  return <div></div>;
}

export default Home;

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
