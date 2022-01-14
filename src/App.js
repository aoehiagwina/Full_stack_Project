import React, {useState} from "react"; 
import './App.css';
import {signUpFetch} from "./utils/index";
import {readUserFetch} from "./utils/index";
import {updateUserFetch} from "./utils/index";

import { Creater } from "./component/creater";
import { Reading } from "./component/reader";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [listUser, setListUser] = useState();
  // let updating = false;

  const signUpHandler = async (e) => {
    e.preventDefault(); //stops the default reset rendering
    const returnValue = await signUpFetch(username, email, password);
    setUser(returnValue.user.username);
  }

  // useEffect(() => {
  //   listingHandler();
  //   }, []);

  const listingHandler = async (e) => {
    e.preventDefault();
    const return_details = await readUserFetch(username);
    setListUser(return_details.user.username);
    setEmail(return_details.user.email);
  }

  const updateHandler = async (e) => {
    e.preventDefault();
    // updating = true;
    const update_details = await updateUserFetch(username, email);
    setUsername(update_details.username);
    setEmail(update_details.email);
  }


  return (
    <div className="App">
      <Creater signingHandler={signUpHandler} 
      new_user={user} set_username={setUsername}
      set_email={setEmail} set_password={setPassword}/>

      <Reading list_user={listUser}
      user_email={email} 
      listing_Handler={listingHandler}
      set_Username={setUsername} />

      <h1>{username}</h1>

      <form onSubmit={updateHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
