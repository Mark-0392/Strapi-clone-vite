import { GiHamburgerMenu } from 'react-icons/gi'
import { useGlobalContext } from './context'

import Navlinks from './Navlinks'
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext()
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }
  return (
    <nav>
      <div className="nav-center" onMouseOver={handleSubmenu}>
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <GiHamburgerMenu />
        </button>
        <Navlinks />
      </div>
    </nav>
  )
}
export default Navbar
