import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Component/Home/Home';

const App: React.FC = () => {
 
  return (
    <div className='App'>
      <Routes>
    
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
