import 'react'
import './Navbar.css' // Import the CSS file

const Navbar = () => {
  return (
    <div className='navbar'>
      <p className='navbar-brand'>Alec J. Davidson</p>

      <div className='navbar-items'>
        <p className='nav-item'>About</p>
        <p className='nav-item'>Blog</p>
        <p className='nav-item'>Projects</p>
      </div>
    </div>
  )
}

export default Navbar
