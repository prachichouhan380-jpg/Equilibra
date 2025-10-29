import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h2>Equilibra</h2>
        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#insights">Insights</a>
          <a href="#profile">Profile</a>
        </nav>
      </header>

      <main>
        <section className="intro">
          <h1>Welcome to Equilibra</h1>
          <p>Your personal health and wellness dashboard</p>
          <button className="btn-primary">Get Started</button>
        </section>
      </main>

      <footer>
        <p>© 2025 Equilibra — Balance your life, effortlessly.</p>
      </footer>
    </div>
  );
}

export default App;
