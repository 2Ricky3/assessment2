import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chart from './components/Chart';
import NoPage from './pages/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/home" className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/chart" className="nav-link">Chart</Link>
                </li>
              </ul>  -
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default function Home() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="mt-4">Welcome to Our Website!</h2>
            <p>This is the Home Page of our website.</p>
            <p>Here are some features of our website:</p>
            <ul>
              <li>Responsive design</li>
              <li>User-friendly interface</li>
              <li>Interactive components</li>
              <li>Engaging content</li>
            </ul>
            <button className="btn btn-primary">Learn More</button>
            <p className="mt-4">Stay connected with us:</p>
            <ul>
              <li>Email: info@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image" className="img-fluid mt-4" />
          </div>
        </div>
        <footer className="mt-4 text-muted text-center">
          &copy; 2024 Our Website. All rights reserved.
        </footer>
      </div>
    );
  }