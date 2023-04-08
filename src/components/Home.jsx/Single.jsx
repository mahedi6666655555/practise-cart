import React from 'react';

const Single = ({ half2, btn }) => {
    let { name, picture, price } = half2





    return (
        <div className='w-[400px] h-[400px] relative  border-2 shadow-lg rounded-lg'>
            <div>
                <div>
                    <img className='h-[230px] w-full' src={picture} alt="" />
                </div>
                <div className='text-center'>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <div >
                    <button onClick={() => btn(half2)} className='absolute w-full bottom-0 py-3 text-white bg-gray-800'>add to cart </button>
                </div>
            </div>
        </div>
    );
};

export default Single;