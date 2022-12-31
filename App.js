import React, { useState, useEffect } from "react";
import MyForm from "./Components/ShowList/MyForm";
import MyNavbar from "./Components/Navbar/MyNavbar";

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
    var path = "Images/";
    return (
      <div className="bg-black text-info">
        <MyForm toggle={toggle} />
        <div class="ms-5 mt-5">
          <h4 className="text-light">The Badass Uchihas</h4>
          <hr
            className="bg-info w-75"
            style={{
              height: "5px",
              border: "none",
            }}
          />
        </div>
        <div className="d-flex text-light">
          {user &&
            user.length > 0 &&
            user.map((userObj, index) => (
              <ul>
                <img
                  src={path + userObj.name + ".jpg"}
                  alt="Logo"
                  width="150"
                  height="200"
                />
                <h6>{userObj.name}</h6>
              </ul>
            ))}
        </div>
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
