import { memo } from 'react';
import Navbar from './compnents/Navbar.jsx';
import Footer from './compnents/footer.jsx';
import Home from './pages/home.jsx';



const App = () => {
  return (
    <div>
      <Navbar /> 
      <Home />
      <Footer />
    </div>
  );
};

export default memo(App);


