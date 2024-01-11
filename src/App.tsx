import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar'
import Home from './pages/Home';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <div>
        <h2 className='heading'>Book A Session</h2>
        <Form />
      </div>
    </>
  )
}

export default App
