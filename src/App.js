import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Product />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
