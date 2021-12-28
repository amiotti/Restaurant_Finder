import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePage = ({ setFetchRestaurants }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  let navigate = useNavigate();

  //const key = window.location.pathname.replace(/[^0-9]/gi, ""); //obtengo el id por url

  //another way is to use useParams to get the id

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3001/api/v1/restaurants/${id}`, {
        method: "PUT",
        made: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          location,
          price_range: priceRange,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    navigate("/");
    setFetchRestaurants(true);
  };

  return (
    <div className="mb-4">
      <h1 className="text-center">Update Restaurant</h1>
      <form action="" on>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              value={name}
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              value={location}
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
            {/* <Link to={"/"} style={{ color: "white" }}> */}
            Update
            {/* </Link> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
