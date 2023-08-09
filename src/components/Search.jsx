import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
         <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
         <div className="userChatInfo"> 
            <span> AbiNew</span>
         </div>
      </div>
    </div>
  )
}

export default Search
