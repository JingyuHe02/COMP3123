import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserSignupForm from './components/UserSignupForm';

function App() {
  return (
    <div>
      <h1>Welcome to React Form Examples </h1>
      {/* <UserForm /> */}
      <UserSignupForm />
    </div>
  );
}

export default App;
