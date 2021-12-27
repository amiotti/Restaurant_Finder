import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RestaurantsList = ({ fetchRestaurants, setFetchRestaurants }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (fetchRestaurants) {
      const fetchData = async () => {
        const response = await fetch(
          "http://localhost:3001/api/v1/restaurants"
        );
        const data = await response.json();
        // console.log(data);
        setRestaurants(data);
      };
      setFetchRestaurants(false);
      fetchData();
    }
  }, [fetchRestaurants, setFetchRestaurants]);

  const onDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/v1/restaurants/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      });

      setRestaurants(
        restaurants.filter((r) => {
          return r.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
    setFetchRestaurants(true);
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((res) => (
              <tr key={res.id}>
                <Link
                  className="table table-hover table-dark"
                  to={`/restaurants/${res.id}/${res.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <td>{res.name}</td>
                </Link>
                <td>{res.location}</td>
                <td>{"$".repeat(res.price_range)}</td>
                <td>Reviews</td>
                <td>
                  <button className="btn btn-warning">
                    <Link
                      to={`/restaurants/${res.id}/update`}
                      style={{ color: "white" }}
                      fetchRestaurants={fetchRestaurants}
                      setFetchRestaurants={setFetchRestaurants}
                    >
                      Update
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(res.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList;
