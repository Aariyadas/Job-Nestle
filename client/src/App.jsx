import { Outlet, Navigate, Route, Routes, useLocation, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { About, AuthenticationPage, Companies, CompanyProfile, FindJob, JobDetail, UploadJob } from "./pages";


function Layout  () {
  const user =true;
  const location =useLocation()
  return user? (
    <Outlet/>) : (
    <Navigate to='user-auth' state={{from:location}}replace/>
  )

}

export default function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        {/* User acess page  only after authenticated  */}
        <Route element={<Layout/>}>
        <Route path='/' element={<Navigate to='/find-jobs' replace={true}/>}/>
        <Route path='/find-jobs' element={<FindJob/>}/>
        <Route path='/companies' element={<Companies/>}/>
        <Route path ={user?.user?.accountType ==="seeker" ? "/user-profile" : "/user-profile/:id"} element={<UserProfile/>}/>
        <Route path={"/company-profile"} element={<CompanyProfile/>}/>
        <Route path={"/company-profile/:id"} element={<CompanyProfile/>}/>
        <Route path={"/upload-job"} element={<UploadJob/>}/>
        <Route path={"/job-detail/:id"} element={<JobDetail/>}/>
        </Route>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/user-auth" element={<AuthenticationPage/>}/>


      </Routes>
      {user && <Footer />}
    </main>
  );
}
