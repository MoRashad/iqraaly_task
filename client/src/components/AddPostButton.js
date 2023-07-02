import React from 'react'
import { Link } from 'react-router-dom'

const AddPostButton = () => {
    return (
        <Link className='inline-block rounded-xl mt-9 bg-white px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-black hover:bg-slate-300 hover:transition-all hover:scale-105' to={"/new-post"} >
            add new post
        </Link>
    )
}

export default AddPostButton