import React from 'react'

function CommentBox() {
    return (
        <div className='h-[400px] w-[400px]  top-40 fixed bg-cyan-400 p-5 flex flex-col justifu-around items-center gap-10 rounded-md'>
            <h1 className='text-2xl'>Add Your review</h1>
            <div className="rating ">
                Rating : <select name="" id="" className='w-[30%] rounded-md'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <div className="comment mt-2">
                    Comment : <input type="text" name="" id="" className='h-[50px] rounded-md pl-2 ' />
                </div>
            </div>


        </div>
    )
}

export default CommentBox
