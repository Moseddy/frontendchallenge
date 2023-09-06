import './App.css';
import Buttons from './Buttons/Buttons';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import User from './components/User/User';

function App() {
  return (
    <div className="container">
      <Header />
      <User />
      <Buttons />
      <Footer />
      <BottomNavigation />
    </div>
  );
}

export default App;
