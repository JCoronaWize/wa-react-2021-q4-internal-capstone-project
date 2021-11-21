import Header from './Header';
import Footer from './Footer'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import { useState } from 'react/cjs/react.development';

const Content = () => {

    const [currentPage, setCurrentPage] = useState('/')

    const navClick = (to) => {
      console.log('Change Destination to: ',to)
      setCurrentPage(to)
      // setCurrentPage(linkInfo)
    }

    return(
      <>
      <Header current={currentPage} onNavClick={navClick}></Header>
      <main>
      {currentPage === '/' && <Home  onNavClick={navClick}></Home>}
      {currentPage === '/products' && <ProductList></ProductList>}      
      </main>
      <Footer></Footer>
      </>
    )
  }

  export default Content