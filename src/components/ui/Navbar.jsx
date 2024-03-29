import React from 'react'
import willSmith from "../../../public/assets/willsmith.jpg"
function Navbar() {
    return (
        <div className='w-full lg:h-[3rem] flex justify-around items-center bg-white p-[2rem]'>


            <div className='logo '>Sociality</div>



            <div className='stories-container'>

                <ul className='flex justify-center items-center'>
                    <li className='story-container mx-[1rem]'><img className='w-[50px] ' src={willSmith}/></li>
                    <li className='story-container mx-[1rem]'><img className='w-[50px] ' src={willSmith}/></li>
                    <li className='story-container mx-[1rem]'><img className='w-[50px] ' src={willSmith}/></li>
                    <li className='story-container mx-[1rem]'><img className='w-[50px] ' src={willSmith}/></li>
                    <li className='story-container mx-[1rem]'><img className='w-[50px] ' src={willSmith}/></li>
                    <li className='story-container mx-[1rem]'><img className='w-[50px] ' src={willSmith}/></li>
                    <li className='story-container mx-[1rem]'><img className='w-[50px] ' src={willSmith}/></li>
                </ul>

            </div>


<div className='searchBar-container'>

<input type='text' />

</div>



        </div>
    )
}

export default Navbar