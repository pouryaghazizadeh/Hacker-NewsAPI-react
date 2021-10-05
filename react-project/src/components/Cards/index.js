import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import User from "../User/index";
import { Cards, Items, Title,ContainerDetails,Detail ,Container} from "./view";
// use context
export const appContext = createContext(null);
function Card() {
  const [value, setValue] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const responseData = await axios.get(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
          );
          const randomNumber = Math.floor(Math.random() * 490) + 1;
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
        } catch (err) {
          console.error("your error", err);
        }
      };
      fetchData();
      //
    }, // eslint-disable-next-line
    []
  );

  const sortData = value.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <>
      <appContext.Provider value={{ sortData }}>
        <Container>
          {sortData.map((value, i) => {
            console.log(value);
            return (
              <Cards key={i}>
                <Title href={value.url}>
                  <h2>{value.title}</h2>
                </Title>
                <ContainerDetails>
                  <Items>
                    <Detail>Score:{value.score}</Detail>
                    <Detail>Time:{value.time}</Detail>
                  </Items>
                  <User user={value.by} />
                </ContainerDetails>
              </Cards>
            );
          })}
        </Container>
      </appContext.Provider>
    </>
  );
}

export default Card;
