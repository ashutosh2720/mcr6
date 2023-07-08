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

    return (
        <foodContext.Provider
            value={{ filteredCuisines, findRestaurent, restaurants, cuisines, selectedCuisine, setSelectedCuisine }}
        >
            {children}
        </foodContext.Provider>
    );
};

const useGlobalFood = () => useContext(foodContext);

export { FoodProvider, useGlobalFood };
