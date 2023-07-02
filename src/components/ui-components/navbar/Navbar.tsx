import 'react'
import './Navbar.css' // Import the CSS file
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)') // Set your desired breakpoint here

    const handleResize = () => {
      setIsCollapsed(mediaQuery.matches)
    }

    // Add event listener to handle window resize
    mediaQuery.addEventListener('change', handleResize)

    // Check the initial device width
    setIsCollapsed(mediaQuery.matches)

    // Clean up event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [])

  return (
    <nav className='navbar'>
      <div className='navbar-brand' onClick={() => navigate('/')}>
        Alec Davidson
      </div>

      <div className={`navbar-collapse ${isCollapsed ? 'collapsed' : ''}`}>
        <ul className='navbar-items'>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Blog</li>
          <li className='nav-item'>Projects</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
