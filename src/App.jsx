import Homepage from './pages/homepage/homepage'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/profile/profilePage'

import LoginPage from './pages/loginPage/loginPage'
import Register from './pages/register/Register'
import Blogs from './pages/blogs/blogs'
import { useSelector } from 'react-redux'
import Blogpage from './pages/blogpage/blogpage'


function App() {
  const user = useSelector((state) => state.user.user)

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/singleblog' element={<Blogpage />} />
        <Route path='/blogs?' element={<Blogs />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={user ? <Navigate to={"/"} /> : <LoginPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
