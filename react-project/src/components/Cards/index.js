import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User  from "../User/index";


function Card() {
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

          const response = Promise.all(
            (await randomData) &&
              randomData.map((id) => {
                return axios
                  .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                  .then((v) => v.data);
              })
          );

          return response.then((response) => setValue(response));

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
  const sorteData = value.sort((a, b) => {
    return b.score - a.score;
  });


  return (
    <>
      <div className="container-card">
        {sorteData.map((value, i) => {
          return (
            <div key={i} className="fg">
              <Link
                to={`${value.url}  
            `}
                className=""
              >
                Title:{value.title}
              </Link>
              <ul>
                <li>Score:{value.score}</li>
                {/* <li>Url:{value.url}</li> */}
                <li>time:{value.time}</li>

              </ul>
            </div>
          );
        })}

        <User sorteData={sorteData}/>
      </div>
    </>
  );
}

export default Card;
