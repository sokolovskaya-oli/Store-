
import './index.css'
import '../src/css/style.css';
import '../src/css/media.css'
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import Catalog from './Components/Catalog';
import Footer from './Components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Main from './Components/Main';
import ProductCard from './Components/ProductCard';
import Context from './Components/Context';
import {useState} from 'react';
import Order from './Components/Order';



function App() {
  const [searchValue, setSearchValue]= useState('')
  const [cart , setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [filter, setFilter]=useState(false)
  const [filterStatus, setFilterStatus]= useState('default')
 


  return (
    <BrowserRouter>
    <Context.Provider value={{searchValue, setSearchValue, cart , setCart,filter, setFilter, filterStatus, setFilterStatus}}>
    
  
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/catalog"  component={Catalog}/>
          <Route path="/product/:id"> <ProductCard /></Route>
          <Route path="/cart" component={Cart}/>
          <Route path="/order" component={Order}/>
        </Switch>
        <Footer />
     
      </div>
      
      </Context.Provider>
    
    </BrowserRouter>
  )
}
export default App;
