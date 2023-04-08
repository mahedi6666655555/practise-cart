import React from 'react';

const Cart = ({ cart2, mahedi1 }) => {


    return (
        <div>

            <p className='text-4xl text-center'>{cart2.length}</p>

            {
                cart2.map(res => <p className='text-3xl text-center' key={res._id}>{res.name}

                    <button onClick={() => mahedi1(res._id)} className='py-2 px-4 bg-gray-200 ml-3 mt-3'>x</button>

                </p>)
            }

        </div>
    );
};

export default Cart;