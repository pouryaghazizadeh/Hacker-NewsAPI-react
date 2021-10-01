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
  useEffect(() => {
    fetchData();
  }, []);

  // make randum number for slice array
  const randumNumber = Math.floor(Math.random() * 490) + 1;
  // slice array for get 10 randumize ids in array
  const newRandumData = data.slice(randumNumber, randumNumber + 10);
  console.log(newRandumData);

  // map array for get object of data
  newRandumData.forEach((id) => {
    return getValue(id);
  });

  // array for get object
  const arr = [];
  // functions for get id and fetch
  async function getValue(id) {
    try {
      await axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((i) => {
          return arr.push(i.data);
        });
    } catch (err) {
      console.log(err);
    }
  }
  console.log(arr);

  useEffect(
    () => {
      getValue();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <div>helooo</div>
      <div></div>
    </>
  );
}

export default Home;
