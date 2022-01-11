import React, {useState, useEffect} from "react"; 
import './App.css';

import { Login } from "./component/login";
import {FetchReq} from "./component/fetcher"

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [arr, setArr] = useState([]);


  useEffect(() => {
    fetching();
    }, []);


  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(user);
  };

  const fetching = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setArr(data);
  };


  return (
    <div className="App">
      <h1>{user}</h1>
      {username ? <h1>Welcome {username}</h1> : <h1>Please log in</h1>}
      {username && <h2>Success</h2>}
      <Login setter={setUser} handler={submitHandler} />
      <FetchReq arr={arr}/>
      {/* {arr.map((item, i) => {
        return (
            <div>
                <p key={i}>{item.author}</p>
                <img
                    className="imageFunTime"
                    src={item.download_url}
                    alt="random"
                />
            </div>
        )})
      } */}
    </div>
  );
}

export default App;
