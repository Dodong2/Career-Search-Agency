
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
  // const User = lazy(() => import('./pages/User'))
  const Home = lazy(() => import("./pages/Home"));
  const RegisterPage = lazy(() => import("./pages/RegisterPage"))
  const LoginPage = lazy(() => import("./pages/LoginPage"))
  const TestPage = lazy(() => import("./pages/TestPage"))
  

  return (
    <>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/test" element={<TestPage />} />
            {/* <Route path="/" element={<User/>}/> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
