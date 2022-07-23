import React from 'react'

const MainContent = (props) => {
  return (
    <div className="flex flex-col h-screen max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="mt-auto w-full" style={{ paddingBottom:`150px` }} >
            <p className="text-white">{props.location}</p>
        </div>
    </div>
  )
}

export default MainContent