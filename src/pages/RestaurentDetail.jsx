import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AiOutlineStar } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { useGlobalFood } from '../contexts/food-context';
import CommentBox from '../components/CommentBox';

function RestaurentDetail() {
    const [isComment, setIsComment] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    const { findRestaurent } = useGlobalFood()
    const restaurant = findRestaurent(Number(id));


    return (
        <>
            <div className={'restaurent-details-main flex justify-center py-16 relative'}>
                <div className="back-button absolute left-1 lg:left-10 top-5 text-xl flex items-center gap-2 cursor-pointer select-none" onClick={() => navigate('/')}>
                    <BiArrowBack /> <span>Back</span>
                </div>
                <div className="restaurent-card w-full sm:min-w-[600px] sm:max-w-[800px] px-3">
                    <div className="details border-b-2 border-black/40 pb-3 flex justify-between items-center">
                        <div className="left">
                            <h1 className={'text-3xl font-bold'}>{restaurant?.name}</h1>
                            <div className="recipes">
                                {
                                    restaurant.menu.map((cuisine, index) => (
                                        <p key={index} className={'inline pr-2'}>{cuisine.name}{restaurant.menu.length - 1 !== index ? ',' : null}</p>
                                    ))
                                }
                            </div>
                            <p>{restaurant?.address}</p>
                            <p>Average Rating: {restaurant?.averageRating}</p>
                        </div>
                        <div className="right min-w-fit">
                            <button className={'bg-cyan-500 text-white p-2 px-3 rounded'} onClick={() => setIsComment(true)}>Add Review</button>
                        </div>
                    </div>
                    <div className="ratings mt-6">
                        <h1 className={'text-3xl font-bold'}>Reviews</h1>
                        <div className="all-reviews flex flex-col gap-5 py-4">
                            {
                                restaurant.ratings.map((rating, index) => (
                                    <div key={index} className={'ind-rating border-b-2 border-black/20 py-2'}>
                                        <div className="profile flex justify-between pr-2 items-start">
                                            <div className="details flex gap-2">
                                                <img src={rating.pp} alt="profile" className={'w-8 rounded-full aspect-square object-fill'} />
                                                <p className={'font-bold'}>{rating.revName}</p>
                                            </div>
                                            <div className="review bg-green-600 px-2 text-yellow-300 flex items-center gap-1 rounded">
                                                {rating.rating}<AiOutlineStar />
                                            </div>
                                        </div>
                                        <div className="comment pl-10">
                                            {rating.comment}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                isComment &&
                <CommentBox setIsComment={setIsComment} restaurantId={restaurant.id} />
            }
        </>

    )
}

export default RestaurentDetail
