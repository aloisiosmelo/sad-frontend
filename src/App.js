import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        <Dashboard/>
      </section>
    </div>
  );
}

export default App;
