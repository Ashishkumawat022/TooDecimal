
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages";
import { Footer, Header } from "./Components";
import Contactus from "./Pages/Contactus/Contactus";


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
              <>
                <Header />
                <Home />
                <Footer />
               
              </>
            }
          />
          <Route path="/contact-us" element={ <Contactus xy={"submit"}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
