import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/not-found';
import Services from './pages/Services';
import Layout from './Layout';
import Contact from './pages/Contact';

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

            <Route
              path="/team"
              element={<NotFound />}
            />


            <Route
              path="/services"
              element={<Services />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Route>

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