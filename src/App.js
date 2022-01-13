import React, {useState} from "react"; 
import './App.css';
import {signUpFetch} from "./utils/index";
import {readUserFetch} from "./utils/index";
import { Creater } from "./component/creater";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [list_user, setListUser] = useState();

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

  return (
    <div className="App">
      <Creater signingHandler={signUpHandler} 
      new_user={user} set_username={setUsername}
      set_email={setEmail} set_password={setPassword}/>

      <h1>{list_user}</h1>
      <h2>{email}</h2>
      <form onSubmit={listingHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          />
          <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
