// import logo from './logo.svg';
import './App.css';
import './Home.css';
import Content from './Content';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {

  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Content></Content>
    </div>
  );
}

export default App;
