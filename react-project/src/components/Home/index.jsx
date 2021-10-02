import axios from "axios";
import React, { useEffect } from "react";

function Home() {
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const responseData = await axios.get(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
          );

          const response =
            (await responseData) &&
            responseData.data.map((id) => {
              return axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json`
              );
            });
          console.log("your data is :", response);
          return response;
        } catch (err) {
          console.error(err);
        }
      };

      // call async function
      fetchData();
    }, // eslint-disable-next-line
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
