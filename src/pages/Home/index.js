import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Do you really want to leave?")) {
      axios
        .delete(`http://localhost:5000/api/delete/${id}`)
        .then(() => this.setState({ status: "Delete successful" }));
    }
    const newData = data.filter(function (item) {
      return item.id !== id;
    });
    setData(newData);
  };

  return (
    <div>
      <Link to="/addUserInfo">
        <button>Add Contact</button>
      </Link>

      <div className="jumbotron  bg-dark-blue text-white">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-9">
              <h1 className="jumbotron-heading">Hi,</h1>
              <p className="lead">
                Welcome to admin page. You can manage user information here .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-n-15">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <div className="card p-4">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <div>{item.username}</div>
                    <div>{item.firstname}</div>
                    <div>{item.lastname}</div>
                    <Link to={`update/${item.id}`}>
                      <button>Edit</button>
                    </Link>

                    <button onClick={() => deleteContact(item.id)}>
                      Delete
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button>View</button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
