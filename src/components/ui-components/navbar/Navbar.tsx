import 'react'
import './Navbar.css' // Import the CSS file
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <p className='navbar-brand' onClick={() => navigate('/')}>
        Alec Davidson
      </p>

      <div className='navbar-items'>
        <p className='nav-item'>About</p>
        <p className='nav-item'>Blog</p>
        <p className='nav-item'>Projects</p>
      </div>
    </div>
  )
}

export default Navbar
