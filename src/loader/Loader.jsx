import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { gif } from '../assets'

const Loader = () => {
    return (
        <>
            <div className='pageloader fixed top-[0] left-[0] w-full h-[100vh] text-[#fff] bg-[#000] z-[7777] transition2 border-0 outline-0'>
                <div className="flex justify-center items-center w-full h-full ">
                    <LazyLoadImage src={gif} className='w-[120px]' />
                </div>
            </div>
        </>
    )
}

export default Loader
