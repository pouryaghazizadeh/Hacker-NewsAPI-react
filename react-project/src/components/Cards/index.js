import axios from "axios";
import { createContext, useEffect, useState } from "react";
// components
import User from "../User/index";
// styles
import {
  Cards,
  Container,
  ContainerDetails,
  Detail,
  Items,
  Title,
} from "./view";
//
// create context
export const appContext = createContext(null);
function Card() {
  // for get array of data
  const [value, setValue] = useState([]);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const responseData = await axios.get(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
          );
          // generate a random number
          const randomNumber = Math.floor(Math.random() * 490) + 1;
          // slice the data array with random number
          const randomData = await responseData.data.slice(
            randomNumber,
            randomNumber + 10
          );
          //  map through ids and fetch data
          const response = Promise.all(
            (await randomData) &&
              randomData.map((id) => {
                return axios
                  .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                  .then((v) => v.data);
              })
          );
          // update the Value in the useState
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
  // sort data Based on  stories score.
  const sortData = value.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <>
      {/* padded an array of data via useContext to child components */}
      <appContext.Provider value={{ sortData }}>
        <Container>
          {
            //  iterate through sorted data and made a card from each one
            sortData.map((value, i) => {
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
                    {/* passed user data to the User component
                     */}
                    <User user={value.by} />
                  </ContainerDetails>
                </Cards>
              );
            })
          }
        </Container>
      </appContext.Provider>
    </>
  );
}

export default Card;
