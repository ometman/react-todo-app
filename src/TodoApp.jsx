import { Routes, Route } from 'react-router-dom';

import Home from '@/routes/Home';
import About from '@/routes/About';
import Login from '@/routes/Login';
import Profile from '@/routes/Profile';
import NotMatch from '@/routes/NotMatch';
import Navbar from './components/Navbar';
// import Layout from '@/components/Layout';

const TodoApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={Layout}> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotMatch />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};
export default TodoApp;