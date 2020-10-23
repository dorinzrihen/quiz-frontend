import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DataService from './Api/DataService';

const HomePage = (props) => {
  const [userName, setuserName] = useState("");

  const location = useLocation();

  //return the username only if exist 
  useEffect(() => {
    let data = '';
    const currentPath = location.pathname.replace('/','');
    async function getData(){
      if(currentPath){
        data = await DataService.get(`quiz/${currentPath}`)
      }
    }
    getData().then(()=>{
      data.data.msg === "error" ? setuserName("") : setuserName(currentPath);
    })

  }, [location]);


  const user = userName ? (
    <p>{`hello ${userName}`}</p>
  ) : (
    <Link to="/login">
      Sign up
    </Link>
  );

  return (
    <div>
      {user}
      <h1>Quiz</h1>
    </div>
  );
};

export default HomePage;
