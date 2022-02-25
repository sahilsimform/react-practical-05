import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddContact.css";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    if (!email || !name) {
      return toast.warning("Please fill all the fields");
    }
    if (checkEmail) {
      return toast.warning("Email already exists.");
    }
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added successfully.");
    history.push("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Add People</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5 Add_div">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group my-2">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Add People"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
