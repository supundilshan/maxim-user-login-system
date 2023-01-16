import './App.css';
import './CSS/Welcome.css';
import './CSS/Signin.css';
import './CSS/Login.css';
import './CSS/DisplayAllUsers.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './components/Login';
import WelcomeNote from './components/Welcome';

import Signin from './components/genaral_user/Register';

import DisplayAllsers from './components/admin_user/DisplayAllsers';
import DisplayUserData from './components/admin_user/DisplayUserData';
import View from './components/genaral_user/View';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeNote />} />

          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login />} />

          <Route path='/view' element={<View />} />

          <Route path='/viewalluser' element={<DisplayAllsers />} />
          <Route path='/viewoneuser' element={<DisplayUserData />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
