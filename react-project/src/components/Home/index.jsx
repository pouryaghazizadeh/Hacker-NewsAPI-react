import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  // this useState is for get value from api
  const [value, setValue] = useState([]);
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const responseData = await axios.get(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
          );

          // make random number for slice array
          const randomNumber = Math.floor(Math.random() * 490) + 1;
          // slice array for get 10 randomize ids in array
          const randomData = await responseData.data.slice(
            randomNumber,
            randomNumber + 10
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
      fetchData();
      //
    }, // eslint-disable-next-line
    []
  );
  // sort array Based on score
const sorteData = value.sort((a,b)=>{return(b.score - a.score)})

  console.log("your value is:",sorteData);
  return (
    <>
      <div>
        {sorteData.map((i, f) => {
          return <div key={f}>{i.score}</div>;
        })}
      </div>
    </>
  );
}

export default Home;
