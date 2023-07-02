import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router'

const PostItem = ({ item, onItemDeleted }) => {
    const navigate = useNavigate();
    const handleDeleteButton = (id) => {
        onItemDeleted(id)
    }

    const handleSeeMoreButton = () => {
        navigate(`/post/${item.id}`)
    }
    return (
        <div className='w-2/3 h-60 bg-sl bg-cyan-950 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg p-5'>
            <div className='flex flex-row justify-between items-baseline'>
                <h2 className='text-3xl text-left font-bold mb-8 overflow-hidden'>{item.title}</h2>
                <RiDeleteBin6Line onClick={() => handleDeleteButton(item.id)} className='z-10 scale-150 cursor-pointer hover:scale-[1.8] hover:text-slate-200 hover:animate-pulse hover:transition-all' />
            </div>
            <p className='text-xl text-left line-clamp-3'>{item.body}</p>
            <button onClick={handleSeeMoreButton} className='bg-white text-black p-2 mt-16 float-left rounded-xl font-medium'>see post</button>
        </div>
    )
}

export default PostItem