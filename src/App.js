import './App.css';
import './CSS/Welcome.css';

import DisplayUserData from './components/normal_user/DisplayUserData';
import Normal_user_LogIn from './components/normal_user/Normal_user_LogIn';
import Normal_user_SignIn from './components/normal_user/Normal_user_SignIn';
import WelcomeNote from './components/Welcome';

function App() {
  return (
    <div className="App">

      <WelcomeNote />



      {/* <Normal_user_SignIn />
      <Normal_user_LogIn />
      <DisplayUserData /> */}
    </div>
  );
}

export default App;
