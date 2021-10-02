import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  useEffect(()=>{
    const fetchData = async () => {
      try{

      }catch(err){
        console.error(err)
      }
    }

    

    // call async function 
    fetchData()


  },// eslint-disable-next-line
  [])
 

  return (
    <>
      <div>helooo</div>
      <div></div>
    </>
  );
}

export default Home;
