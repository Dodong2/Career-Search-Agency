
/********** react library **********/
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/********** PWA **********/
import './validations/ServiceWorkerValidation'
/********** CSS **********/
import './assets/css/App.css'
import './assets/css/color.css'
import './assets/css/default.css'
import './assets/css/media.css'



function App() {


  //Pages
  //user pages
  const Home = lazy(() => import("./pages/user_pages/Home"));
  const RegisterPage = lazy(() => import("./pages/user_pages/RegisterPage"))
  const LoginPage = lazy(() => import("./pages/user_pages/LoginPage"))
  const TestPage = lazy(() => import("./pages/TestPage"))
  //admin pages
  const PostDetailsPage = lazy(() => import('./pages/admin_pages/PostDetailsPage'))
  

  return (
    <>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/adminPost" element={<PostDetailsPage />} />
            {/* <Route path="/" element={<User/>}/> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
