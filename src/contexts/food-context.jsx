import React, { createContext, useContext, useState } from "react";
import { cuisineData, restaurantsData } from "../components/foodDetail";


const foodContext = createContext();

const FoodProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState(restaurantsData);
    const [cuisines, setCuisines] = useState(cuisineData);
    const [selectedCuisine, setSelectedCuisine] = useState(null)

    const filteredCuisines = restaurants.filter(restaurant => restaurant.cuisine_id === selectedCuisine)
    const findRestaurent = (id) => {
        return restaurants.find(restaurant => restaurant.id === Number(id));
    }

    const commentHandler = (comment, restaurantId) => {
        setRestaurants(prevState => prevState.map(
            restaurant => restaurant.id === restaurantId ? { ...restaurant, ratings: [comment, ...restaurant.ratings] } : restaurant
        ))
    }

    return (
        <foodContext.Provider
            value={{ filteredCuisines, findRestaurent, restaurants, cuisines, selectedCuisine, setSelectedCuisine, commentHandler }}
        >
            {children}
        </foodContext.Provider>
    );
};

const useGlobalFood = () => useContext(foodContext);

export { FoodProvider, useGlobalFood };
