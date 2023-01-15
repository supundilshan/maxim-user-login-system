import './App.css';
import './CSS/Welcome.css';
import './CSS/Signin.css';
import './CSS/Login.css';
import './CSS/DisplayAllUsers.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './components/Login';
import WelcomeNote from './components/Welcome';

import Normal_user_SignIn from './components/genaral_user/Register';

import DisplayAllsers from './components/admin_user/DisplayAllsers';
import DisplayUserData from './components/admin_user/DisplayUserData';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeNote />} />

          <Route path='/signin' element={<Normal_user_SignIn />} />
          <Route path='/login' element={<Login />} />

          <Route path='/login' element={<Login />} />

          <Route path='/viewalluser' element={<DisplayAllsers />} />
          <Route path='/viewoneuser' element={<DisplayUserData />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
