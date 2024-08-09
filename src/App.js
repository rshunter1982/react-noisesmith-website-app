import logo from './NoiseSmith_Logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <header className="App-header">

        <img src={logo} className="App-logo" alt="logo"/>
              <h1>Noisesmith</h1>
      </header>
          <body className="App-body">
              <video autoplay muted loop className="backgroundVideo">
                  <source
                      src="https://ugc.production.linktr.ee/54327e82-0d80-45a5-94db-20fa65e1566e_production-id-4990319--1080p-.mp4"
                      type="video/mp4"/>
              </video>
        <h1>Custom Section</h1>
      </body>
      <footer className="App-footer">
        <h1>footer</h1>
      </footer>
    </div>
  );
}

export default App;
