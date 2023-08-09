import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chill Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <span>Shubham</span>
        <button>logout</button>
      </div>
      
    </div>
  )
}

export default Navbar
