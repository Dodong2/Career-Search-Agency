/********** react library **********/
import { Link } from "react-router-dom"
/********** Components **********/
import MainContainer from "../../components/common/MainContainer"


const AdminPage = () => {
  return (
    <>
      <MainContainer>
        <Link to='/adminPost'><button>Post Details</button></Link>
        <Link to='/details'><button>See Details</button></Link>
      </MainContainer>
    </>
  )
}

export default AdminPage
