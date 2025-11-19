import UserContext from './context/UserContext';
import UserChild1 from './components/UserChild1';
import UserChild2 from './components/UserChild2';

const user = {
  name: "John Doe",
  role: "Professor",
  display() {
    console.log(this);
  },
  setName(value) {
    this.name = value;
  }
};

function App() {
  return (
    <>
      <h1>React Context API example</h1>
      <UserContext.Provider value={user}>
        <UserChild1 />
        <UserChild2 />
      </UserContext.Provider>
    </>
  );
}

export default App;

