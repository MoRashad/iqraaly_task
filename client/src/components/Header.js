import React from 'react'
import { useNavigate } from 'react-router';
import iqraalySvgWhite from "../white-iqraaly.svg";

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className='flex justify-between items-center flex-row-reverse pr-5 pl-5 bg-black sticky top-0 z-20'>
            <img onClick={() => navigate("/")} className=' top-0 right-0 cursor-pointer' src={iqraalySvgWhite} alt="" />
            <h3 className='text-2xl text-white font-bold'>Iqraaly technical task</h3>
        </header>
    )
}

export default Header