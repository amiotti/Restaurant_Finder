import React, { useState } from "react";
import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import RestaurantsList from "../components/RestaurantLists";

const Home = () => {
  const [fetchRestaurants, setFetchRestaurants] = useState(true);

  return (
    <div>
      <Header />
      <AddRestaurant setFetchRestaurants={setFetchRestaurants} />
      <RestaurantsList
        fetchRestaurants={fetchRestaurants}
        setFetchRestaurants={setFetchRestaurants}
      />
    </div>
  );
};

export default Home;
