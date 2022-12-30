import React, { useState, useEffect } from "react";
import MyForm from "./Components/ShowList/MyForm";

function App() {
  const [user, setUser] = useState([]);
  const [flag, setFlag] = useState(true);

  const fetchData = () => {
    return fetch("http://localhost:3001/api/uchihas")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function toggle() {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }

  if (flag) {
    var path = "Images/"
    return (
      <div className="text-info">
        <MyForm toggle={toggle} />
        <ul>
          {user &&
            user.length > 0 &&
            user.map((userObj, index) => (
              <div>
                <img
                  src = {path + userObj.name + ".jpg"}
                  alt="Logo" 
                  width="150"
                  height="200"
                />
                <h4>{userObj.name}</h4>
              </div>
            ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="text-info">
        <MyForm toggle={toggle} />
      </div>
    );
  }
}

export default App;
