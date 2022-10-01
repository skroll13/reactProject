import Home from '../src/pages/home/index'
import Header from '../src/components/header/index'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import AddSpell from './pages/addSpell/index';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addSpell' element={< AddSpell />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
