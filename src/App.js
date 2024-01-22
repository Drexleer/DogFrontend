import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Views/Detail';
import NewDog from './components/Views/NewDog';
import Error404 from './components/Utils/error404';
import About from './components/Views/About';
import Header from './components/Nav/Header/index';

function App() {

  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname !== '/' && <Header/>}
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/home/:id' element={<Detail/>} />
        <Route path='*' element={<Error404/>}/>
        <Route path='/home/newDog' element={<NewDog/>} />
        <Route path='/home/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
