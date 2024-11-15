
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
  const JobPostsPage = lazy(() => import("./pages/user_pages/JobPostsPage"))
  //admin pages
  const AdminPage = lazy(() => import("./pages/admin_pages/AdminPage"))
  const PostDetailsPage = lazy(() => import('./pages/admin_pages/PostDetailsPage'))
  const ViewDetailsPage = lazy(() => import('./pages/admin_pages/ViewDetailsPage'))
  const UpdateDetailsPage = lazy(() => import('./pages/admin_pages/UpdateDetailsPage'))
  

  return (
    <>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/test" element={<JobPostsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/adminPost" element={<PostDetailsPage />} />
            <Route path="/details" element={<ViewDetailsPage />} />
            <Route path="/update/:id" element={<UpdateDetailsPage />} />
            {/* <Route path="/" element={<User/>}/> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
