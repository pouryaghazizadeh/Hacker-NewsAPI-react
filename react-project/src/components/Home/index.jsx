import axios from "axios";
import React, { useEffect, useState } from "react";
import Random from "../Random.js";

function Home() {
  const [random, setRandom] = useState(0);
  // this useState is for get value from api
  const [value, setValue] = useState([]);
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const responseData = await axios.get(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
          );

          // slise array to be arrray of 10 property random
          const randomData = await responseData.data.slice(
            setRandom(Random(responseData.data) - 10),
            random + 10
          );

          console.log("your random data is:", randomData);
          const response = Promise.all(
            (await randomData) &&
              randomData.map((id) => {
                return axios
                  .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                  .then((v) => v.data);
              })
          );
          response.then((response) => setValue(response));

          return response;

          //  response;
        } catch (err) {
          console.error("your error", err);
        }
      };

      // call async function
      fetchData();
      //
    }, // eslint-disable-next-line
    []
  );

  // console.log("lest value :",;
  console.log("your value is:", value);
  return (
    <>
      <div>
        {value.map((i,f) => {
          return <div key = {f}>{i.score}</div>;
        })}
      </div>
    </>
  );
}

export default Home;
