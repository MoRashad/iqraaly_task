import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import { useNavigate } from 'react-router';
import Header from '../components/Header'

const AddPostpage = () => {
    const TITLE_WORD_LIMIT = 100;
    const BODY_WORD_LIMIT = 500;
    const titleRef = useRef();
    const bodyRef = useRef();
    const [titleCharLength, setTitleCharLength] = useState(0);
    const [bodyCharLength, setBodyCharLength] = useState(0)
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [responseMessage, setResponseMessage] = useState();
    const [isTitleLimitReached, setIsTitleLimitReached] = useState(false);
    const [isBodyLimitReached, setIsBodyLimitReached] = useState(false);

    const handleTitleChange = (e) => {
        titleRef.current.value = e.target.value
        setTitleCharLength(e.target.value.length);
        if (titleCharLength >= TITLE_WORD_LIMIT) {
            setIsTitleLimitReached(true)
        } else {
            setIsTitleLimitReached(false)
        }
    }

    const handleBodyChange = (e) => {
        bodyRef.current.value = e.target.value
        setBodyCharLength(e.target.value.length)
        if (bodyCharLength >= BODY_WORD_LIMIT) {
            setIsBodyLimitReached(true)
        } else {
            setIsBodyLimitReached(false)
        }
    }


    const handleCreateNewPost = async (e) => {
        e.preventDefault()
        console.log(titleRef.current.value)
        console.log(bodyRef.current.value)
        const bodyOptions = {
            title: titleRef.current.value,
            body: bodyRef.current.value
        }
        if (bodyCharLength <= BODY_WORD_LIMIT && titleCharLength <= TITLE_WORD_LIMIT) {
            axios.post(process.env.REACT_APP_URL + "/posts", bodyOptions).then((res) => {
                console.log(res);
                setResponseMessage(res.data.message);
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }).catch((err) => {
                console.log(err)
                setError(err.response.data.message);
            })
            setTimeout(() => {
                setError(null)
            }, 3000);
        }

    }
    return (
        <>
            <Header />
            {error && <p className='text-white font-semibold text-2xl self-center text-center mt-96'>{error}</p>}
            {responseMessage && <p className='text-white font-semibold text-2xl self-center text-center mt-96'>{responseMessage}</p>}
            {(!error && !responseMessage) && <div className='flex flex-col justify-center items-center mt-10'>
                <p className='text-4xl font-semibold mb-10'>add new post</p>
                <form onSubmit={handleCreateNewPost} className='flex flex-col w-2/3 text-2xl font-medium gap-6 '>
                    <label className='uppercase'>Title</label>
                    <input onChange={handleTitleChange} ref={titleRef} type="text" className='rounded-md text-black pl-5 h-10 border border-gray-300 focus:ring-blue-500 focus:border-blue-500' />
                    <p style={isTitleLimitReached ? { color: "red" } : { color: "white" }} className='text-right text-xs -mt-5'>{titleCharLength}/{TITLE_WORD_LIMIT} charachters left</p>
                    <label className='uppercase' >Body</label>
                    <textarea onChange={handleBodyChange} ref={bodyRef} placeholder='Write your thoughts here...' type="text" className='border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block h-52 text-black text-sm pl-4 pt-4 rounded-md' />
                    <p style={isBodyLimitReached ? { color: "red" } : { color: "white" }} className='text-right text-xs -mt-5 mb-10'>{bodyCharLength}/{BODY_WORD_LIMIT} charachters</p>

                    <button className='block uppercase rounded-3xl bg-black p-3 font-semibold w-2/3 self-center hover:cursor-pointer hover:bg-gray-900 hover:scale-105 transition-transform'>create new post</button>
                </form>
            </div>}
        </>
    )
}

export default AddPostpage