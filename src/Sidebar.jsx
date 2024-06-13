import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { nanoid } from 'nanoid'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-container">
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink) => {
            const { links, pageId, page } = sublink
            console.log(page)
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, url, icon, label } = link
                    return (
                      <div key={id}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </div>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
export default Sidebar
