/********** Components **********/
import MainContainer from "../../components/common/MainContainer";
import { Link } from "react-router-dom";
/********** Function **********/


const Home = () => {

  return (
    <>
      <MainContainer>
       <h1>sss</h1>
       <Link to="/register"><button>register</button></Link>
       <Link to="/login"><button>Login</button></Link>
       <Link to="/adminPost"><button>Admin</button></Link>
      </MainContainer>
    </>
  );
};

export default Home;
