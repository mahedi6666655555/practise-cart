import React, { useEffect, useState } from 'react';
import Single from './Single';
import Cart from './Cart.jsx/Cart';

const Home = () => {



    let [api, setApi] = useState([])

    useEffect(() => {
        let url = `https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setApi(data))
    }, [])

    let [cart, SetCart] = useState([])

    let btn = (half) => {

        let mahedi = [...cart, half]
        SetCart(mahedi)




    }

    let mahedi = id => {

        let remaing=cart.filter(ts => ts._id !== id);
        SetCart(remaing)



    }

    return (
        <div className='flex'>

            <div className='grid grid-cols-2 gap-4'>
                {
                    api.map(half => <Single

                        key={half._id}
                        half2={half}
                        btn={btn}
                        mahedi={mahedi}
                    ></Single>)
                }
            </div>

            <div className=' w-1/2'>
                <h1 className='text-center'>mahedi</h1>

                <Cart

                    cart2={cart}
                    mahedi1={mahedi}
                ></Cart>
            </div>
        </div>



    );
};

export default Home;