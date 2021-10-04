import axios from "axios";
import React, { useEffect, useState } from "react";

  

function User({sorteData}) {
  
// console.log("ssssss", sorteData );
  const [data, setData] = useState([]);


 
  useEffect(
    () => {
      setData(sorteData)
      

    
  const fetchUsers = async () => {
    try {
       const getUser ="f"
      //  Promise.all(
      //   (await data) &&
      //     data.map((value) => {
      //       return axios
      //         .get(
      //           `https://hacker-news.firebaseio.com/v0/user/${value.by}.json`
      //         )
      //         .then((v) => v.data);
      //     })
      // );


      //  console.log("withour usestate",   getUser);
      return  getUser
      //  getUser.then((value) => {
      //   setUser(value);
      // });
    } catch (err) {
      console.error(err);
    }
  };

      fetchUsers();
    },
    // eslint-disable-next-line
    [sorteData]
  );


  return (
    <div className="w">
      {/* {user.map((value,i) => {
        return (
          <div key={i}>
            <span>k Karma:{value.karma}</span>
            <span>Author id:{value.id}</span>
          </div>
        );
      })} */}
    </div>
  );
}

export default User;
