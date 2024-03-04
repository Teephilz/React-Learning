
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/ProductsParam'
import ProductDetailParam from './pages/ProductDetailParam'
import ProductDetailProp from './pages/ProductDetailProp'
import { ThemeProvider } from '../context/ThemeContext'
import StateProvider from "../contextReducer/StateProvider";
import reducer, { initialState } from "../contextReducer/reducer";

function App() {

  return (
    <ThemeProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
      <Routes>
        <Route  path='/' element= {<Home/>}/>
        <Route path='/products/details/:id' element={<ProductDetailParam/>}/>
        <Route path='/products/details' element={<ProductDetailProp/>}/>
        <Route  path='/products' element= {<Products/>}/>
      </Routes>
    </Router>
      </StateProvider>
    </ThemeProvider>
   

  )
}

export default App
