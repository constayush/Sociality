import React from 'react'
import profileIcon from '../../../public/assets/profile.svg'
import homeIcon from '../../../public/assets/home.svg'
import searchIcon from '../../../public/assets/search.svg'
import themeIcon from '../../../public/assets/theme.svg'
import createIcon from '../../../public/assets/create.svg'
function Sidebar() {
  return (
    <div className='sidebar w-[20rem] h-screen  flex justify-start items-center flex-col sticky top-0'>


    <div className='logo  text-[3rem] text-[#DCF2F1] tracking-wider flex justify-center items-center'>Sociality</div>
    
    
    <div className='flex flex-col text-[#DCF2F1]'>

<div className='sidelinks-container flex gap-[1.5rem] my-3'><img className='w-[20px]' src={homeIcon}/><button>Home   </button></div>
<div className='sidelinks-container flex gap-[1.5rem] my-3'><img className='w-[20px]  brightness-100' src={searchIcon}/><button>Search </button></div>
<div className='sidelinks-container flex gap-[1.5rem] my-3'><img className='w-[20px]  brightness-100' src={createIcon}/><button>Create </button></div>
<div className='sidelinks-container flex gap-[1.5rem] my-3'><img className='w-[20px]  brightness-100' src={profileIcon}/><button>Profile</button></div>
<div className='sidelinks-container flex gap-[1.5rem] my-3'><img className='w-[20px]  brightness-100' src={themeIcon}/><button>theme  </button></div>

    </div>


    </div>
  )
}

export default Sidebar