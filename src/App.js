import { BrowserRouter,Routes,Route }from 'react-router-dom';
import Home from "./pages/Home/index.jsx";
import Navbar from "./layout/navbar/index.jsx";
import Footer from './layout/footer/index.jsx';
function App() {
  return (
    <>
    
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} exact/>
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