import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const ViewPage = ({ mode }) => {
  const [user, setUser] = useState();
  const { id } = useParams();
  const [isActiveEdit, setIsActiveEdit] = useState(false);
  useEffect(() => {
    if (mode === "update") {
      axios.get(`http://localhost:5000/api/get/${id}`).then((res) => {
        setUser({ ...res.data[0] });
        //spread operation/rest operation
        //user.name = res.data[0].name
        //user.email = res.data[0].name
        //user.contact = res.data[0].name
      });
    }
    if (mode === "add") {
    }
  }, []);
  const { register, getValues, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const onSubmitValid = () => {
    const [
      username,
      firstname,
      lastname,
      email,
      address,
      city,
      country,
      postalcode,
      about,
    ] = getValues([
      "username",
      "firstname",
      "lastname",
      "email",
      "address",
      "city",
      "country",
      "postalcode",
      "about",
    ]);
    console.log(
      username,
      firstname,
      lastname,
      email,
      address,
      city,
      country,
      postalcode,
      about
    );
  };

  return (
    <main role="main " className="bg-gray-200">
      <div className="jumbotron  bg-dark-blue text-white">
        <div className="container">
          <div className="row justify-content-md-center">
            {mode !== "add" ? (
              <div className="col-9">
                <h1 className="jumbotron-heading">Hi, {user?.name}</h1>
                <p className="lead">
                  This is your profile page. You can see your information
                </p>
              </div>
            ) : (
              <div className="col-9">
                <h1 className="jumbotron-heading">Hi, </h1>
                <p className="lead">Please add the new user's information</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container-fluid mt-n-15">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <div className="card p-4">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    {mode !== "add" ? (
                      <h3 className="mb-0">My account</h3>
                    ) : (
                      <h3 className="mb-0">Add new user information</h3>
                    )}
                  </div>
                  {mode !== "add" && (
                    <div className="col-4 text-right ">
                      <div
                        className={
                          !isActiveEdit
                            ? "btn btn-primary border"
                            : "btn border"
                        }
                        onClick={() => setIsActiveEdit(!isActiveEdit)}
                      >
                        View Profile
                      </div>
                      <div
                        className={
                          isActiveEdit ? "btn btn-primary border" : "btn border"
                        }
                        onClick={() => setIsActiveEdit(!isActiveEdit)}
                      >
                        Edit Profile
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmitValid)}>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>

                          <input
                            {...register("username", {
                              required: "Please enter your name",
                            })}
                            className="form-control form-control-alternative"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                          ></input>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>

                          <input
                            {...register("email", {
                              required: "Please enter your name",
                            })}
                            className="form-control form-control-alternative"
                            id="input-email"
                            placeholder="name@example.com"
                            type="text"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <input
                            {...register("firstname", {
                              required: "Please enter your first name",
                            })}
                            className="form-control form-control-alternative"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                          ></input>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <input
                            {...register("lastname", {
                              required: "Please enter your last name",
                            })}
                            className="form-control form-control-alternative"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  {/* <!-- Address --> */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <input
                            {...register("address", {
                              required: "Please enter your address",
                            })}
                            className="form-control form-control-alternative"
                            id="input-address"
                            placeholder="Address"
                            type="text"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <input
                            {...register("city", {
                              required: "Please enter your city",
                            })}
                            className="form-control form-control-alternative"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          ></input>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <input
                            {...register("country", {
                              required: "Please enter your country",
                            })}
                            className="form-control form-control-alternative"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          ></input>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>

                          <input
                            {...register("postalcode", {
                              required: "Please enter your postal code",
                            })}
                            className="form-control form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  {/* <!-- Description --> */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <textarea
                        {...register("about")}
                        rows="4"
                        className="form-control form-control-alternative"
                        placeholder="A few words about you ..."
                      />
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="container">
                    <div className="row">
                      <div className="col text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="row align-items-center justify-content-between p-5">
          <div className="col-6 m-auto text-center">
            <div className="copyright font-weight-bolder">
              <p> by Creative Leon Huang</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default ViewPage;
