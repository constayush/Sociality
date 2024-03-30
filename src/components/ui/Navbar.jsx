import React from 'react'
import willSmith from "../../../public/assets/willsmith.jpg"
function Navbar() {
    return (
        <div className='navbar w-[100%] lg:h-[3rem] flex justify-around items-center  p-[2rem]'>





            <div className='stories-container '>

                <ul className='flex justify-center items-center overflow-x-auto'>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    <li className='story-container mx-[1rem] rounded-full'><img className='w-[50px] story rounded-full' src={willSmith}/></li>
                    
                </ul>

            </div>





        </div>
    )
}

export default Navbar