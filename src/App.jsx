import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import NotFound from './components/not-found';
function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home activeTab={activeTab} setActiveTab={setActiveTab} />}
          />
          <Route
            path="/about"
            element={<NotFound />}
          />
          <Route
            path="/services"
            element={<NotFound />}
          />
          <Route
            path="/contact"
            element={<NotFound />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;