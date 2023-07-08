import React from "react";
import { cuisineData } from "../components/foodDetail";
import { restaurantsData } from "../components/foodDetail";
import { useGlobalFood } from "../contexts/food-context";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { setSelectedCuisine, filteredCuisines } = useGlobalFood()

    const navigate = useNavigate();
    return (
        <div className="full flex flex-col  justify-center items-center p-3 gap-3">
            <h1 className="text-4xl  bg-cyan-800 p-2 rounded-md text-white">Food oredering App</h1>
            <h1>select your Cuisine</h1>
            <div className="navigation w-[70%] flex justify-around">
                {
                    cuisineData.map((data) =>
                        <button className="bg-red-400 p-3 rounded-lg" onClick={() => setSelectedCuisine(data.id)} >{data.name}</button>
                    )
                }
            </div>

            <div className="data w-[100%] flex flex-col justify-center gap-10 items-center mt-10" >
                {
                    filteredCuisines.map((restaurent) =>
                        <div className="res-name w-[100%]  justify-around  gap-10 flex" onClick={() => navigate(`/RestaurentDetail/${restaurent.id}`)}>
                            <h1 className=""> {restaurent.name}</h1><br />
                            {
                                restaurent.menu.map((menu) =>
                                    <div className="menu flex justify-center w-[100%] h-[300px] shadow-md cursor-pointer  flex-col p-2 rounded-lg border-2 "  >
                                        <img src={menu.imgSrc} alt="" className="h-[70%] w-[100%] rounded-lg" />
                                        <h1 className="font-bold">{menu.name}</h1>
                                        <h1 className="text-gray-500 font-semibold"> Price :{menu.price}</h1>
                                        <h1 className="text-gray-500 font-semibold"> qty :{menu.qty}</h1>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;
