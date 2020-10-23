import React, { useState } from "react";
import FormInput from "./component/FormInput";
import { Link , withRouter} from "react-router-dom";
import DataService from './Api/DataService';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [registerMode, setRegisterMode] = useState(true);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const formMode = registerMode ? (
    <form className="form-register" onSubmit={
       
        (e) =>{
            e.preventDefault();
            const newMember = {
                username: username,
                name: fullname,
                password: password,
            }
            DataService.create(newMember,'');
            props.history.push(`/${username}`)
            //history.push('/', {username});
        } 
    }>
      <FormInput
        inputValue="User name"
        forname="username"
        inputType="text"
        changeValue={(value) => setUsername(value)}
      />
      <FormInput
        inputValue="Full name"
        forname="fullname"
        inputType="text"
        changeValue={(value) => setFullname(value)}
      />
      <FormInput
        inputValue="Password"
        forname="password"
        inputType="password"
        changeValue={(value) => setPassword(value)}
      />
      <input type="submit" value="Submit" username={username}/>
    </form>
  ) : (
    <form className="form-register" onSubmit={()=>{

    }}>
      <FormInput
        inputValue="User name"
        forname="username"
        inputType="text"
        changeValue={(value) => setUsername(value)}
      />
      <FormInput
        inputValue="Password"
        forname="password"
        inputType="password"
        changeValue={(value) => setPassword(value)}
      />
      <input type="submit" value="Submit"/>
    </form>
  );

  console.log(username);
  return (
    <div className="form">
      {formMode}
      <div className="form-btn">
      <Link to="/">return</Link>
        <p
          onClick={() => {
            setRegisterMode(!registerMode);
          }}
        >
          {registerMode ? "Already have account" : "create new user"}
        </p>
      </div>
    </div>
  );
};

export default withRouter(Login);
