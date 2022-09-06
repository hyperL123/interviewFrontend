import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:5000/api/get/${id}`).then((res) => {
      console.log(res);
      setValue("name", res.data[0].name);
      setValue("email", res.data[0].email);
      setValue("contact", res.data[0].contact);
    });
  }, [id]);
  const { register, getValues, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = () => {
    const [name, email, contact] = getValues(["name", "email", "contact"]);
    console.log(name, email, contact);
    if (!id) {
      axios
        .post("http://localhost:5000/api/post", {
          name,
          email,
          contact,
        })
        .then(() => {
          console.log(123);
          setValue("name", "");
          setValue("email", "");
          setValue("contact", "");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(`http://localhost:5000/api/update/${id}`, {
          name,
          email,
          contact,
        })
        .then(() => {
          setValue("name", "");
          setValue("email", "");
          setValue("contact", "");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    navigate("/");
    navigate(0);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <div>Name</div>
        <input
          {...register("name", {
            required: "Please enter your name",
          })}
          placeholder="name"
          type="text"
        ></input>
        <div>Email</div>
        <input
          {...register("email", {
            required: "Please enter your email",
          })}
          placeholder="email"
          type="text"
        ></input>
        <div>Contact</div>
        <input
          {...register("contact", {
            required: "Please enter your contact",
          })}
          placeholder="contact"
          type="text"
        ></input>
        <button type="submit">Submit</button>
        <Link to="/">
          <input type="button" value="Go back to Home"></input>
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
