import FinalPage from './components/FinalPage';
import { BrowserRouter } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  const options = { duration: 2000 };
    Aos.init(options);
  return (
    <BrowserRouter>
      <div className='App'>
        <FinalPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
