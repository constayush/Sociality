import React from 'react'
import will  from '../../../public/assets/willsmith.jpg'
function ScrollCard() {
  return (

<div className='w-full h-[45rem] bg-[#4c494900]  mb-[1rem] '>


    <div className='w-full h-[10%] bg-[#00000000] flex items-center justify-between p-[2rem] text-white'><div className='flex justify-center items-center gap-[.75rem]'><img src={will} className='w-[3rem] h-[3rem] rounded-full'/><p>user</p></div> <div>...</div></div>
<div className='w-full h-[80%] bg-slate-100'></div>
<div className='w-full h-[10%] bg-slate-700'></div>


</div>
  )
}

export default ScrollCard