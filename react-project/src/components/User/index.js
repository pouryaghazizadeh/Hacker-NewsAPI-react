import axios from "axios";
import React, { useState, useEffect } from "react";
function User({ sortData }) {
  const [userData, setUserData] = useState([]);

  useEffect(
    () => {
      const fetchUsers = async () => {
        try {
          const getUser = Promise.all(
            (await sortData) &&
              sortData.map((value) => {
                return axios
                  .get(
                    `https://hacker-news.firebaseio.com/v0/user/${value.by}.json`
                  )
                  .then((v) => v.data);
              })

          )
           getUser.then((v) => setUserData(v));

          return getUser;
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
      {userData.map((value,i) => {
        return (
          <div style={{margin:"30px"}} key={i}>
            <span>k Karma:{value.karma}</span>
            <span>Author id:{value.id}</span>
          </div>
        );
      })}
    </div>
  );
}

export default User;
