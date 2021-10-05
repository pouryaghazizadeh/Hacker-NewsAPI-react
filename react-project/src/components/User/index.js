import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../Cards/index";
// style
import { ContainerUser, UserDetail } from "./view";
// User components that contains an unordered list 
function User({ user }) {
  const { sortData } = useContext(appContext);
  const [userData, setUserData] = useState([]);
  useEffect(
    () => {
      // iterate through sorted array and fetch the data
      const fetchUsers = async () => {
        try {
          const getUser = Promise.all(
            (await sortData) &&
              // eslint-disable-next-line
              sortData.map((value) => {
                // check users
                if (value.by === user) {
                  return axios
                    .get(
                      `https://hacker-news.firebaseio.com/v0/user/${value.by}.json`
                    )
                    .then((v) => v.data);
                }
              })
          );

          return getUser.then((v) => setUserData(v));
        } catch (err) {
          console.error(err);
        }
      };

      fetchUsers();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <>
      {
        // eslint-disable-next-line
        userData.map((value, i) => {
          // iterate through userData if the value wasn't undefined
          if (value !== undefined) {
            return (
              <ContainerUser key={i}>
                <UserDetail>Karma:{value.karma ? value.karma : ""}</UserDetail>
                <UserDetail>Author id:{value.id}</UserDetail>
              </ContainerUser>
            );
          }
        })
      }
    </>
  );
}

export default User;
