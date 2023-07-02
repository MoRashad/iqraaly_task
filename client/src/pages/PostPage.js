import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';

const PostPage = () => {
    const params = useParams();
    const [{ data, error, loading }, doFetch] = useFetch(`${process.env.REACT_APP_URL}/posts/${params.id}`);
    useEffect(() => {
        doFetch({ method: "GET" })

    }, [doFetch])

    return (
        <>
            <Header />
            {loading && <div className='flex justify-center items-center h-screen'><Loader /></div>}
            {error && <div className='flex justify-center items-center h-screen'>Something went wrong</div>}
            {
                data && <div className='flex flex-col items-center h-screen gap-11'>
                    <p className='text-5xl font-semibold mt-11 uppercase'>{data[0].title}</p>
                    <p className='w-2/3 text-xl font-medium break-all'>{data[0].body}</p>
                </div>
            }

        </>
    )
}

export default PostPage