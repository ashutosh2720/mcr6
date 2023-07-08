import React from 'react'
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useGlobalFood } from '../contexts/food-context';

function RestaurentDetail() {
    const { id } = useParams();
    const { findRestaurent } = useGlobalFood()
    const restaurent = findRestaurent(id);
    const navigate = useNavigate();


    return (
        <div className='w-[100%]'>
            <div className="back-to-home w-[100%] bg-cyan-800 p-5 text-white cursor-pointer" onClick={() => navigate('/')}>
                <ArrowBackIcon fontSize='large' /> back to home
            </div>
            <div className='w-[100%] flex justify-center mt-5'>
                <button className='bg-cyan-800 text-white flex p-3 rounded-lg justify-end'>Add review</button>
            </div>
            <div className="details flex flex-col justify-center  p-3 items-center bg-cyan-100 w-[100%] mt-5">
                <h1 className='text-3xl'>{restaurent.name}</h1>
                <div className='flex gap-1 justify-start items-start'>
                    {
                        restaurent.menu.map((item) =>
                            <div className="menu">
                                {item.name}
                            </div>
                        )
                    }
                </div>
                <h1>{restaurent.address}</h1>
                <div className="reviews">
                    <h1 className='text-2xl font-bold p-5'>Reviews</h1>
                    {
                        restaurent.ratings.map((item) =>
                            <div className="menu">
                                <div className='flex gap-2 p-5'>
                                    <img src={item.pp} alt="" className='h-[30px] w-[30px] rounded-full' />
                                    <h1>{item.revName}</h1>
                                </div>
                                <h1>{item.comment}</h1>
                                <hr />
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default RestaurentDetail
