import React, { useState } from "react";

const AddRestaurant = ({ setFetchRestaurants }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();

    try {
      const addedRest = await fetch(
        "http://localhost:3001/api/v1/restaurants",
        {
          method: "POST",
          made: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            location,
            price_range: priceRange,
          }),
        }
      );
      setName("");
      setLocation("");
      setPriceRange("");
      setFetchRestaurants(true);
    } catch (err) {
      console.log(err);
    }

    // setName("");
    // setLocation("");
    // setPriceRange("");
    // setFetchRestaurants(true);
  };

  return (
    <div className="mb-4">
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
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
