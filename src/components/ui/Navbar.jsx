import React from 'react'
import willSmith from "../../../public/assets/willsmith.jpg"
import SearchBar from './SearchBar'
function Navbar() {
    return (
        <div className='navbar w-[100%] lg:h-[3rem] flex justify-around items-center  p-[2rem] mt-[1.25rem] '>





            <div className='stories-container'>

                <ul className='flex justify-center items-center w-[60rem] overflow-auto'>
                    <li className='story-container rounded-full mx-3'><img className='w-[70px] h-[70px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container rounded-full mx-3'><img className='w-[70px] h-[70px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container rounded-full mx-3'><img className='w-[70px] h-[70px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container rounded-full mx-3'><img className='w-[70px] h-[70px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container rounded-full mx-3'><img className='w-[70px] h-[70px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container rounded-full mx-3'><img className='w-[70px] h-[70px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container rounded-full mx-3'><img className='w-[70px] h-[70px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container rounded-full mx-3'><img className='w-[70px] h-[70px] story rounded-full' src={willSmith}/></li>
                </ul>

            </div>


<SearchBar/>


        </div>
    )
}

export default Navbar