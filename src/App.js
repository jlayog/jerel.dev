import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Landing from './components/Landing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Header />
        <Routes>
          <Route 
            path="/"
            element={<Landing />}
          />
        </Routes>
    </main>
  );
}

export default App;