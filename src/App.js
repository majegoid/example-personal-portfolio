import { About } from './components/sections/About';
import { Footer } from './components/sections/Footer';
import { Work } from './components/sections/Work';

function App() {
  return (
    <div className='app'>
      <div id='top-left-decoration-box'></div>
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
