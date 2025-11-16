import React from 'react';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className="app-container">
      {/* Top green header bar */}
      <div className="user-list-header">
        <h1>User List</h1>
      </div>

      {/* Main user list content */}
      <PersonList />
    </div>
  );
}

export default App;
