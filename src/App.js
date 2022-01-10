import React, {useState, useEffect} from "react"; 
import './App.css';

import { Login } from "./component/login";
import { FetchReq } from "./component/fetcher";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    FetchReq();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(user);
  };



  return (
    <div className="App">
      <h1>{user}</h1>
      {username ? <h1>Welcome {username}</h1> : <h1>Please log in</h1>}
      {username && <h2>Success</h2>}
      <Login setter={setUser} handler={submitHandler} />
      <FetchReq setArray={setArr} />
      {arr.map((item, index) => {
        return (
            <div>
                <p key={index}>{item.author}</p>
                <img
                    className="imageFuntime"
                    src={item.download_url}
                    alt="random"
                />
            </div>
        )})
      }
    </div>
  );
}

export default App;
