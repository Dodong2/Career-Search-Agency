/********** Hooks **********/
import { useAdmin } from "../../hooks/useAdmin"

const Collars = () => {
    const {loading, pink_collar, green_collar, white_collar, blue_collar, grey_collar} = useAdmin()
  return (
    <>
      <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <p>Pink Collars Count: {pink_collar}</p>
        <p>Green Collars Count: {green_collar}</p>
        <p>White Collars Count: {white_collar}</p>
        <p>Blue Collars Count: {blue_collar}</p>
        <p>Grey Collars Count: {grey_collar}</p>
        </>
      )}
    </div>
    </>
  )
}

export default Collars
