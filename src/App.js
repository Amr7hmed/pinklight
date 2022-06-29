import { BrowserRouter,Routes,Route }from 'react-router-dom';
import Home from "./pages/Home/index.jsx";
import Navbar from "./layout/navbar/index.jsx";
import Footer from './layout/footer/index.jsx';
import Favorite from './pages/Favorite/index.jsx';
import Proudect from './pages/Proudect/index.jsx';
import Cart from './pages/Cart/index.jsx';
import Confirm from './pages/Checkout/Confirm.jsx';
import Payment from './pages/Checkout/Payment.jsx';
import Orderdone from './pages/Checkout/Orderdone.jsx';
import Posts from './pages/Post/index.jsx';
import Porfile from './pages/Porfile/index.jsx';
import Myorders from './pages/Orders/index.jsx';
import Mynotifications from './pages/Notifications/index.jsx';
import MyAds from './pages/Ads/index.jsx';
import Massages from './pages/Massages/index.jsx';
import Proudects from './pages/Proudects/index.jsx';

function App() {
  return (
    <>
    
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/favorite" element={<Favorite/>} exact/>
            <Route path="/proudects" element={<Proudects/>} exact/>
            <Route path="/proudect/:id" element={<Proudect/>} exact/>
            <Route path="/cart" element={<Cart/>} exact/>
            <Route path="/confirm" element={<Confirm/>} exact/>
            <Route path="/payment" element={<Payment/>} exact/>
            <Route path="/orderdone" element={<Orderdone/>} exact/>
            <Route path="/post" element={<Posts/>} exact/>
            <Route path="/myporfile" element={<Porfile/>} exact/>
            <Route path="/myorders" element={<Myorders/>} exact/>
            <Route path="/mynotifications" element={<Mynotifications/>} exact/>
            <Route path="/myads" element={<MyAds/>} exact/>
            <Route path="/mymassages" element={<Massages/>} exact/>
            
            
            
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
  );
}

export default App;
/*
<Navbar/>
          <Switch>
            <Route path="/evotech" component={Home} exact/>
            <Route path="/about" component={Aboutus} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/blogs" component={Blogs} exact />
            <Route path="/blog" component={Blog} exact />
            <Route path="/contactus" component={ContactUs} exact />
          </Switch>
          <ButtonsWhatsapp/>
          <Footer />
*/