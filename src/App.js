// import logo from './logo.svg';
import './App.css';
import './Home.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header></Header>
      <Content>
        <Home></Home>
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
