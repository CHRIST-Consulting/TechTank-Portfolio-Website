import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/not-found';
import Services from './pages/Services';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />

          </Route>

          <Route
            path="/about"
            element={<NotFound />}
          />

          <Route
            path="/services"
            element={<Layout />}
          >
            <Route
              index
              element={<Services />}
            />
          </Route>

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