import './App.css';
import './CSS/Welcome.css';
import './CSS/Normal_user_SignIn.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DisplayUserData from './components/normal_user/DisplayUserData';
import Normal_user_LogIn from './components/normal_user/Normal_user_LogIn';
import Normal_user_SignIn from './components/normal_user/Normal_user_SignIn';
import WelcomeNote from './components/Welcome';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeNote />} />

          <Route path='/signin' element={<Normal_user_SignIn />} />
          <Route path='/login' element={<Normal_user_LogIn />} />

          <Route path='/viewuser' element={<DisplayUserData />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
