import { useGlobalContext } from './context'
import sublinks from './data'
const Navlinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className="nav-links">
      {sublinks.map((sublink) => {
        const { pageId, page } = sublink
        console.log(page)
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
export default Navlinks
