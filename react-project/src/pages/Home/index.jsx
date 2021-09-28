import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      // const responce = await axios.get(" https://hacker-news.firebaseio.com/v0/topstories.json")
      const responce = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      setData(responce.data);

      console.log(data);
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

  const randumNumber = Math.floor(Math.random() * 490) + 1;

 const newRandumData = data.slice(randumNumber, randumNumber + 10);
 
  console.log(newRandumData);

  return <></>;
}

export default Home;
