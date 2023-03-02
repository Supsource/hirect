import React from 'react'

const Main = () => {
  return (
    <div className="relative">
            <img className="" src="backgroundImg.png" alt="search" />
            <div className="absolute top-[30%] left-[25%]">
                
                <input type="text" class="h-14 w-[36rem] pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
                <div class="absolute top-2 right-2">
                    <button class="h-10 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-800">Search</button>
                </div>
            </div>
        </div>
  )
}

export default Main