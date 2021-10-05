import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../Cards/index";
// style
import{UserDetail,ContainerUser } from "./view"



function User({ user }) {
  const { sortData } = useContext(appContext);
  const [userData, setUserData] = useState([]);
  useEffect(
    () => {
      const fetchUsers = async () => {
        try {
          const getUser = Promise.all(
            (await sortData) &&
            // eslint-disable-next-line 
              sortData.map((value) => {
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
      
      {// eslint-disable-next-line 
      userData.map((value, i) => {
        if (value !== undefined) {
          return (
            <ContainerUser key={i}>
              <UserDetail>Karma:{value.karma ? value.karma : ""}</UserDetail>
              <UserDetail>Author id:{value.id}</UserDetail>
            </ContainerUser>
          );
        }
      })}
    </>
  );
}

export default User;
