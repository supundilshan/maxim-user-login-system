import './App.css';
import Normal_user_LogIn from './components/normal_user/Normal_user_LogIn';
import Normal_user_SignIn from './components/normal_user/Normal_user_SignIn';

function App() {
  return (
    <div className="App">
      <Normal_user_SignIn />
      <Normal_user_LogIn />
    </div>
  );
}

export default App;
