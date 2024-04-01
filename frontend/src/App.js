import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SiteHeader/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/category/:id' element={<Category/>}/>
        <Route path='/details/:id' element={<ReviewDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
