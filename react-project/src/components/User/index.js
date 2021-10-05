import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../Cards/index";
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
    <div className="w">
      
      {// eslint-disable-next-line 
      userData.map((value, i) => {
        if (value !== undefined) {
          return (
            <li key={i}>
              <li>k Karma:{value.karma ? value.karma : ""}</li>
              <li>Author id:{value.id}</li>
            </li>
          );
        }
      })}
    </div>
  );
}

export default User;
