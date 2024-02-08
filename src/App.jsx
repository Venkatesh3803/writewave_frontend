import Homepage from './pages/homepage/homepage'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/profile/profilePage'
import LoginPage from './pages/loginPage/loginPage'
import Register from './pages/register/Register'
import { useSelector } from 'react-redux'
import SingleBlogPage from './pages/singleBlogPage/SingleBlogPage'
import AboutPage from './pages/aboutpage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import BlogsPage from './pages/blogsPage/BlogsPage'



function App() {
  const user = useSelector((state) => state.user.user)

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/login' element={user ? <Navigate to={"/"} /> : <LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/singleblog/:id' element={<SingleBlogPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blogs?' element={<BlogsPage />} />
      </Routes>
    </div>
  )
}

export default App
