import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center  h-screen px-2 py-4 gap-y-8 text-2xl italic'>
             <h1 className="inline gap-x-4 bg-orange-500 text-4xl font-extrabold tracking-widest px-8 py-1 rounded-md">
                    About
                </h1>
            <p className='w-[70vw]'>

                Welcome to The 7 Spices, where flavor meets tradition! Our passion for food is rooted in the belief that every dish tells a story. Inspired by diverse culinary traditions, we blend seven unique spices to create unforgettable flavors that delight your palate.
            </p>
            <p className='w-[70vw]'>

                At The 7 Spices, we pride ourselves on using the freshest ingredients, ensuring that each meal is crafted with care and served with love. Whether you're indulging in our signature Chicken Burger, savoring crispy French Fries, or enjoying our mouthwatering Grilled Chicken, we promise an experience that tantalizes your taste buds.
                Join us on a culinary journey where every bite is a celebration of taste!
            </p>
        </div>
    )
}

export default page