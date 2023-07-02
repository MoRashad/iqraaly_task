import React, { useState } from 'react'
import useFetch from "../hooks/useFetch";
import Header from '../components/Header'
import Loader from '../components/Loader';
import AddPostButton from '../components/AddPostButton';
import PostItem from '../components/PostItem';
import { useEffect } from 'react';
import axios from 'axios';
import SnackBar from '../components/SnackBar';

const Homepage = () => {

    const [{ data, error, loading }, doFetch] = useFetch(process.env.REACT_APP_URL + "/posts");
    const [itemDeleteMessage, setItemDeleteMessage] = useState();

    useEffect(() => {
        doFetch({ method: "GET" })
    }, [doFetch])

    const handleDeletePost = async (id) => {
        axios.delete(`${process.env.REACT_APP_URL}/posts/${id}`).then((res) => {
            console.log(res);
            setItemDeleteMessage("Item deleted successfully")
            doFetch({ method: "GET" })
        }).catch((error) => {
            console.log(error)
            setItemDeleteMessage("Error deleteing item");
        });
        setTimeout(() => {
            setItemDeleteMessage(null)
        }, 5000);


    }
    return (
        <div className='text-center h-screen'>

            <Header />
            <AddPostButton />
            <div className="text-center flex mt-36 gap-6 flex-col justify-center items-center ">
                {loading && <Loader />}
                {
                    (data && !error) && data.map((item) => {
                        return <React.Fragment key={item.id}>
                            <PostItem item={item} onItemDeleted={handleDeletePost} />
                        </React.Fragment>
                    })
                }
                {error && <p>{error.message}</p>}
                {
                    itemDeleteMessage && <SnackBar itemDeleteMessage={itemDeleteMessage} />
                }
            </div >
        </div >
    )
}

export default Homepage